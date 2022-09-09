import {Comment} from "../../postDetail/interfaces/comment.interface";

export interface Post {
  username: string;
  title: string;
  id: number;
  post: string;
  category: string;
  clicks: number;
  comments: Comment[];
  userId: number;
}
