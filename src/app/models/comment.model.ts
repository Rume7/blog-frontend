// src/app/models/comment.model.ts
export interface Comment {
    id?: number;
    content: string;
    author: string;
    postId: number;
    createdAt?: Date;
}