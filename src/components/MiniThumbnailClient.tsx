"use client";
import { useState, useEffect } from "react";
import MiniThumbnail from "./MiniThumbnail";

import { Article, Category } from "@/model";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MiniThumbnailClient({
  articleCategory,
}: {
  articleCategory: Category;
}) {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/article?category=${articleCategory._id}`,
          {
            next: { revalidate: 60 },
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          }
        );
        const data = await res.json();
        setArticles(data.rows);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [articleCategory._id]);

  return (
    <div>
      <div className='my-6'>
        <p className='font-semibold'>อื่น ๆ ในหมวดหมู่เดียวกัน</p>
        <MiniThumbnail articles={articles} />
      </div>
      <div className='my-6 flex gap-2 justify-end'>
        <button
          className='btn rounded-lg'
          onClick={() => {
            router.back();
          }}
        >
          กลับ
        </button>
        <Link href='/'>
          <button className='btn btn-neutral rounded-lg'>รายการทั้งหมด</button>
        </Link>
      </div>
    </div>
  );
}
