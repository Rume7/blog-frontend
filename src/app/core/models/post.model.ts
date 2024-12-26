import { User } from "./user.model";

export interface Post {
    id: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    author: User;
}