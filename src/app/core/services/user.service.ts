import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { HttpParams } from '@angular/common/http';

export interface UserResponse {
  users: User[];
  totalPages: number;
  currentPage: number;
  totalUsers: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) {}

  getAllUsers(page: number = 1): Observable<UserResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', '10'); // You can adjust the limit as needed

    // Pass params to the get request
    return this.apiService.get<UserResponse>('/users', { params });
  }

  getCurrentUser(): Observable<User> {
    return this.apiService.get<User>('/user');
  }

  updateUser(user: Partial<User>): Observable<User> {
    return this.apiService.put<User>('/user', { user });
  }

  deleteUser(userId: number): Observable<void> {
    return this.apiService.delete<void>(`/users/${userId}`);
  }

  updateUserStatus(userId: number, isActive: boolean): Observable<User> {
    return this.apiService.put<User>(`/users/${userId}/status`, { isActive });
  }
}
