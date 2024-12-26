import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/components/shared.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserService } from '../../core/services';

const routes: Routes = [
  { 
    path: '', 
    component: AdminDashboardComponent,
    children: [
      { path: 'users', component: UserManagementComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent
  ],
  providers: [UserService]
})
export class AdminModule { }