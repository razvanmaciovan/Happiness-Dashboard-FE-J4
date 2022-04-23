import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from 'src/app/config.service';
import { IUser } from '../user-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList$!: Observable<IUser[]>;
  constructor(private service:ConfigService) { }

  ngOnInit(): void {
    this.userList$ = this.service.getUsersList();
    this.userList$.forEach(element => {
      console.log(element);
      
    });
    
  }

}
