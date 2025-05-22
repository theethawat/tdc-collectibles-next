import { Article } from "@/model";
import Link from "next/link";
import _ from "lodash";

function MiniThumbnail({ articles }: { articles: Article[] }) {
  return (
    <div className='p-2 flex w-full overflow-x-auto'>
      {_.map(articles, (each: Article, index: number) => (
        <div key={index} className='w-48'>
          <Link
            className='card bg-base-100 shadow-md m-2 h-48'
            href={`/article/${each?._id}`}
          >
            <figure className='h-24'>
              <img src={each?.image?.url} alt={each?.name} className='' />
            </figure>
            <div className='card-body p-3'>
              <h3 className='card-title text-sm'>
                {_.truncate(each?.name, { length: 24 })}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MiniThumbnail;
