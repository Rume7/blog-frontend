// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) {}

  login(credentials: {email: string; password: string}): Observable<User> {
    return this.apiService.post<{user: User; token: string}>('/auth/login', credentials)
      .pipe(
        map(response => {
          this.setAuth(response);
          return response.user;
        })
      );
  }

  logout(): void {
    this.purgeAuth();
  }

  register(user: {username: string; email: string; password: string}): Observable<User> {
    return this.apiService.post<{user: User; token: string}>('/auth/register', user)
      .pipe(
        map(response => {
          this.setAuth(response);
          return response.user;
        })
      );
  }

  private setAuth(response: {user: User; token: string}): void {
    this.jwtService.saveToken(response.token);
    this.currentUserSubject.next(response.user);
  }

  private purgeAuth(): void {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null);
  }
}