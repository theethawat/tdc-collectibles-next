interface Image {
  _id: string;
  url: string;
  type: string;
  feature: boolean;
}

export interface ImageResponse {
  rows: Image[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export default Image;
