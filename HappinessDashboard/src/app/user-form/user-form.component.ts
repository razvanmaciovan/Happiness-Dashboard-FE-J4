import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from './user.service';

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

  constructor(private service:UserService) { }


  ngOnInit(): void {
    this.userList$ = this.service.getUsersList();
    this.userList$.forEach(element => {
      console.log(element);

    });

  }

  Login(){
    if(this.CheckUsername(this.username) == true){
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
        this.service.saveUserData(data);
      }

        
    });
  }
  else{
    alert(this.CheckUsername(this.username));
  }
  }
  CheckUsername(username:string){
    if(this.username == null) return "Username cannot be empty";
    if(!this.AlphaNumberOnly(username)) return "Username can only contain letters and/or numbers";

    return true

  }

  AlphaNumberOnly (username : string) {  // Accept only alpha numerics, not special characters 
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    if (regex.test(username)) {
        return true;
    }
    return false;
  }

}
