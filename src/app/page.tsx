import { ArticlesList } from "@/components";
import { Article, ArticleResponse } from "@/model";

export default async function Home() {
  let articles: Article[] = [];
  let size: number = 12;
  let total: number = 0;

  // Do A server component for a SEO friendly page
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/article?page=1&size=${size}`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: ArticleResponse = await res.json();
    articles = data.rows;
    total = data.total;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return (
    <div className='w-full'>
      <ArticlesList initialArticles={articles} initialTotal={total} />
    </div>
  );
}
