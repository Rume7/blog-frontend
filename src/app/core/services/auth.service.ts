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
  ) {
    // Check if there's a stored token on initialization
    const token = this.jwtService.getToken();
    if (token) {
      this.loadUser();
    }
  }

  login(credentials: {email: string; password: string}): Observable<User> {
    return this.apiService.post<{user: User; token: string}>('/auth/login', credentials)
      .pipe(
        map(response => {
          this.setAuth(response);
          return response.user;
        })
      );
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

  logout(): void {
    this.purgeAuth();
  }

  isAuthenticated(): boolean {
    return !!this.jwtService.getToken() && !!this.currentUserSubject.value;
  }

  private loadUser(): void {
    this.apiService.get<User>('/user').subscribe({
      next: (user) => this.currentUserSubject.next(user),
      error: () => this.purgeAuth()
    });
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