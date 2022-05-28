import { Component, OnInit } from '@angular/core';
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
        this.service.registerUser(this.username, this.password).subscribe(res => {
            console.log(res);
        });
    }
}
