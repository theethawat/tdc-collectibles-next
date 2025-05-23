import { Error, MiniThumbnailClient, Gallery } from "@/components";

import { Article, Category } from "@/model";
import dayjs from "dayjs";
import "dayjs/locale/th";
import _ from "lodash";
import type { Metadata, ResolvingMetadata } from "next";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/article/${slug}`,
      {
        next: { revalidate: 60 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );
    const article: Article = await res.json();
    if (!res.ok) {
      throw Error({ message: "Failed to fetch data" });
    }

    return (
      <div className='w-full'>
        <Gallery article={article} />
        <h3 className='text-xl font-bold my-4'>{article?.name}</h3>
        <p className='pb-6'>{article?.description}</p>
        <p className=''>
          หมวดหมู่ :{" "}
          {_.map(article?.categories, (category: Category, index: number) => (
            <span className='badge badge-ghost' key={index}>
              {category?.name}
            </span>
          ))}
        </p>
        <p className='py-2'>
          ช่วงเวลา : {dayjs(article?.date).locale("th").format("D MMMM YYYY")}
        </p>
        <MiniThumbnailClient articleCategory={article?.categories[0]} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return <Error message={null} />;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/article/${slug}`,
      {
        next: { revalidate: 60 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );
    const article: Article = await res.json();

    return {
      title: `${article.name} - ${process.env.NEXT_PUBLIC_TITLE}`,
      description: _.truncate(article.description, { length: 100 }),
      keywords: _.map(
        article?.categories,
        (category: Category) => category?.name
      ),
      authors: [
        {
          name: "Theethawat Savastham",
          url: "https://www.theethawat.com",
        },
      ],
      icons: {
        icon: "/tdcgci.png",
        shortcut: "/tdcgci.png",
        apple: "/tdcgci.png",
      },
      creator: "Theethawat Savastham",
      publisher: "Theethawat Savastham",
      applicationName: process.env.NEXT_PUBLIC_TITLE,
      openGraph: {
        images: [
          {
            url: article?.image?.url,
            width: 600,
            height: 300,
          },
        ],
        siteName: process.env.NEXT_PUBLIC_TITLE,
        title: `${article.name} - ${process.env.NEXT_PUBLIC_TITLE}`,
        description: _.truncate(article.description, { length: 100 }),
        type: "article",
        publishedTime: article?.date,
        authors: "Theethawat Savastham",
        countryName: "Thailand",
        locale: "th-TH",
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      title: "Error",
      description: "Failed to fetch article data",
    };
  }
}
