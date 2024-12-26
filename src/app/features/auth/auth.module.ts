import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/components/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }