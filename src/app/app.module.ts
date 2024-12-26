import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { BlogService } from '../app/core/services/blog.service';
import { AuthService } from '../app/core/services/auth.service';
import { UserService } from '../app/core/services/user.service';
import { CommentService } from '../app/core/services/comment.service';
import { BlogComponent } from './shared/components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
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