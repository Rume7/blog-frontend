import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    
  private apiUrl = `${environment.apiUrl}/api/posts`;

  constructor(private http: HttpClient) { }

  // Get all posts with pagination
  getPosts(page: number = 0, size: number = 10): Observable<ApiResponse<Post[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.http.get<ApiResponse<Post[]>>(this.apiUrl, { params });
  }

  // Get recent posts
  getRecentPosts(limit: number = 10): Observable<ApiResponse<Post[]>> {
    return this.http.get<ApiResponse<Post[]>>(`${this.apiUrl}/recent/${limit}`);
  }

  // Get a single post by ID
  getPostById(id: number): Observable<ApiResponse<Post>> {
    return this.http.get<ApiResponse<Post>>(`${this.apiUrl}/${id}`);
  }

  // Create a new post
  createPost(post: Post): Observable<ApiResponse<Post>> {
    return this.http.post<ApiResponse<Post>>(this.apiUrl, post);
  }

  // Update an existing post
  updatePost(id: number, post: Post): Observable<ApiResponse<Post>> {
    return this.http.put<ApiResponse<Post>>(`${this.apiUrl}/${id}`, post);
  }

  // Delete a post
  deletePost(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }

  // Search posts
  searchPosts(query: string): Observable<ApiResponse<Post[]>> {
    const params = new HttpParams().set('query', query);
    return this.http.get<ApiResponse<Post[]>>(`${this.apiUrl}/search`, { params });
  }
}