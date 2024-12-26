// src/app/core/services/comment.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private apiService: ApiService) {}

  getComments(id: number): Observable<Comment[]> {
    return this.apiService.get<Comment[]>(`/posts/${id}/comments`);
  }

  addComment(id: number, content: string): Observable<Comment> {
    return this.apiService.post<Comment>(
      `/posts/${id}/comments`,
      { comment: { content } }
    );
  }

  deleteComment(id: number, commentId: number): Observable<void> {
    return this.apiService.delete<void>(
      `/posts/${id}/comments/${commentId}`
    );
  }
}