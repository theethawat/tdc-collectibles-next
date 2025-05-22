import Category from "./Category";
import Image from "./Image";

interface Article {
  _id: string;
  name: string;
  categories: Category[];
  date: string;
  description: string;
  image: Image;
}

export interface ArticleResponse {
  rows: Article[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export default Article;
