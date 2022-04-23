import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../config.service';

export interface IUser {
  userId: number;
  userName: string;
  userPassword: string;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userList$!: Observable<IUser[]>;
  currentUser$!:Observable<IUser>;
  username!: string;
  password: string | undefined;
  
  constructor(private service:ConfigService) { }

  Login(): void {
    this.currentUser$ = this.service.getUser(this.username)
    console.log(this.currentUser$);
    
  }
  ngOnInit(): void {
    this.userList$ = this.service.getUsersList();
    this.userList$.forEach(element => {
      console.log(element);
      
    });
    
  }


}
