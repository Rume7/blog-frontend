// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { PostService } from './core/services/post.service';
import { Post } from './core/models/post.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  currentPost?: Post;
  recentPosts: Post[] = [];
  loading = false;
  error = '';
  currentUser = 'Rume7'; // This should be handled by an auth service in a real app

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadRecentPosts();
  }

  loadRecentPosts() {
    this.loading = true;
    this.postService.getRecentPosts(10)
      .pipe(
        catchError(error => {
          this.error = 'Failed to load posts. Please try again later.';
          return of({ status: 'error', message: error.message, data: [], timestamp: new Date() });
        })
      )
      .subscribe(response => {
        this.loading = false;
        if (response.status === 'success') {
          this.recentPosts = response.data;
          if (this.recentPosts.length > 0) {
            this.currentPost = this.recentPosts[0];
          }
        }
      });
  }

  selectPost(id: number) {
    this.loading = true;
    this.postService.getPostById(id)
      .pipe(
        catchError(error => {
          this.error = 'Failed to load post. Please try again later.';
          return of({ status: 'error', message: error.message, data: null, timestamp: new Date() });
        })
      )
      .subscribe(response => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.currentPost = response.data;
        }
      });
  }
}