import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  isLoading = false;
  error: string | null = null;
  currentPage = 1;
  totalPages = 1;
  totalUsers = 0;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(page: number = 1): void {
    this.isLoading = true;
    this.error = null;
    
    this.userService.getAllUsers(page).subscribe({
      next: (response) => {
        this.users = response.users;
        this.currentPage = response.currentPage;
        this.totalPages = response.totalPages;
        this.totalUsers = response.totalUsers;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to load users. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  onPageChange(page: number): void {
    this.loadUsers(page);
  }

  editUser(userId: number): void {
    // Implement the edit user logic here
    // For example, navigate to edit page:
    this.router.navigate(['/admin/users/edit', userId]);
    // Or open a modal/dialog for editing
  }

  updateUserStatus(userId: number, isActive: boolean): void {
    this.userService.updateUserStatus(userId, isActive).subscribe({
      next: (updatedUser) => {
        this.users = this.users.map(user => 
          user.id === userId ? updatedUser : user
        );
      },
      error: (error) => {
        this.error = 'Failed to update user status. Please try again later.';
      }
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== userId);
        },
        error: (error) => {
          this.error = 'Failed to delete user. Please try again later.';
        }
      });
    }
  }
}