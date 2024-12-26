// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Services
import { BlogService } from './services/blog.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    BlogPostComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    BlogService,
    AuthService,
    UserService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }