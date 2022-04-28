import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private service: ConfigService) {
  }

  ngOnInit(): void {
  }

  SignUp() {
    this.service.registerUser(this.username, this.password).subscribe();
  }
}
