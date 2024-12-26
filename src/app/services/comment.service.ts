import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// src/app/services/comment.service.ts
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) { }

  getCommentsForPost(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/post/${postId}`);
  }

  addComment(postId: number, comment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/post/${postId}`, comment);
  }

  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${commentId}`);
  }
}