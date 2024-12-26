import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '', redirectTo: 'blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }