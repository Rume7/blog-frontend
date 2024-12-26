// src/app/models/blog-post.model.ts
export interface BlogPost {
    id?: number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
}