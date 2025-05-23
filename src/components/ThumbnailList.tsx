import _ from "lodash";
import { Article, Category } from "@/model";
import Link from "next/link";
import Image from "next/image";

function ThumbnailList({ articles }: { articles: Article[] }) {
  return (
    <div className='p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {_.map(articles, (each: Article, index: number) => (
        <div key={index}>
          <Link
            className='card bg-base-100 shadow-xl m-2 h-full rounded-xl'
            href={`/article/${each?._id}`}
          >
            <figure className='h-50'>
              <Image
                src={each?.image?.url}
                alt={each?.name}
                height={50}
                width={300}
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title text-base'>
                {_.truncate(each?.name, { length: 100 })}
              </h3>
              <p>
                {_.map(
                  each?.categories,
                  (category: Category, index: number) => (
                    <span className='badge badge-accent' key={index}>
                      {category?.name}
                    </span>
                  )
                )}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ThumbnailList;
