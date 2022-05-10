import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './user-form/login/login.component';
import { SignupComponent } from './user-form/SignUp-Form/signup.component';

const routes: Routes = [
  {path: 'user-form', component: UserFormComponent } ,
  {path: 'signup-form', component: SignupComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
