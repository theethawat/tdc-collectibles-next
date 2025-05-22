interface Category {
  place: any;
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryResponse {
  rows: Category[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export default Category;
