import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../../config.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
  }

  SignUp() {
    this.service.registerUser(this.username, this.password).subscribe(res=>{
      console.log(res);
    });
  }
}
