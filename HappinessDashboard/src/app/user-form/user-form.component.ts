import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
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
  currentUser$!: IUser;
  username!: string;
  password!: string | undefined;

  constructor(private service:ConfigService) { }


  ngOnInit(): void {
    this.userList$ = this.service.getUsersList();
    this.userList$.forEach(element => {
      console.log(element);

    });

  }

  Login(){
    this.service.getUserByUsername(this.username).subscribe((data:any) =>
    {
      if(data == null){
        alert("User not found");
      }
      else if(this.password != data.password)
      {
          alert("Password is incorrect")
      }
      else{
        console.log(data)
      }


    });

    //   if(element == null){
    //     alert("User not found");
    //   }
    //   // else if(this.password != element.userPassword || element.userPassword == null){
    //   //   alert("Password incorrect");
    //   // }
    //   else{
    //     console.log(element);
    //   }
    // })
    // this.currentUser$.subscribe((value: IUser) => {
    //   let user: IUser = value;
    //   console.log(user.userName)
    //   console.log(user.userId)
    //   console.log(user.userPassword)

    // })
    // this.currentUser$.forEach(element => {

    // });

  }

}
