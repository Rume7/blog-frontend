import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';
import { Post } from '../../../core/models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  recentPosts: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.blogService.getAllPosts().subscribe(
      posts => {
        this.posts = posts;
        this.recentPosts = [...posts].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
    );
  }
}