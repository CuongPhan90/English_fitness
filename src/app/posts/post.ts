export interface IPost {
  postId: number;
  postTitle: string;
  postAuthor: string;
  releaseDate: string;
  postHeadings: {
    heading_1: string;
    heading_2: string;
    heading_3: string;
    heading_4: string;
    heading_5: string;
    heading_6: string;
  };
  postDetail: {
    detail_1: string;
    detail_2: string;
    detail_3: string;
    detail_4: string;
    detail_5: string;
    detail_6: string;
  };
  starRating: number;
  imageUrl: string;
  videoURL: string;
}
