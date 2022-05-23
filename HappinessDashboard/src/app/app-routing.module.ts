import { Component, NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { SignupComponent } from './user-form/SignUp-Form/signup.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user-form', component: UserFormComponent } ,
  {path: 'signup-form', component: SignupComponent},
  {path: 'poll/:id', component: PollComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
