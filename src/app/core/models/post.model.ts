import { Author } from "./author.model";
import { Comment } from "./comment.model";

export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    author: Author;
    allComments: Comment[];
}