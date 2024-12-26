import { User } from "./user.model";

export interface Post {
    id: number;
    title: string;
    description: string;
    content: string;
    tagList: string[];
    createdAt: Date;
    updatedAt: Date;
    author: User;
}