// src/app/core/services/blog.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private apiService: ApiService) {}

  getAllPosts(): Observable<Post[]> {
    return this.apiService.get<Post[]>('/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.apiService.get<Post>(`/posts/${id}`);
  }

  createPost(post: Partial<Post>): Observable<Post> {
    return this.apiService.post<Post>('/posts', { post });
  }

  updatePost(id: number, post: Partial<Post>): Observable<Post> {
    return this.apiService.put<Post>(`/posts/${id}`, { post });
  }

  deletePost(id: number): Observable<void> {
    return this.apiService.delete<void>(`/posts/${id}`);
  }
}