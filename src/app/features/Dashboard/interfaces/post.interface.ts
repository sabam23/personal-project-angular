export interface Post {
  username: string;
  title: string;
  id: number;
  post: string;
  category: string;
  clicks: number;
  comments: [];
  userId: number;
}
