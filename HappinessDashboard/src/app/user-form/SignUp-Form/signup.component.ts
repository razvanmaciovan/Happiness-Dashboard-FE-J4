import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { UserFormComponent } from '../user-form.component';
import { UserService } from '../user.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    username!: string;
    password!: string;

    constructor(private service: UserService, private route:RoutingService) {
    }

    ngOnInit(): void {
    }

    SignUp() {
        this.service.registerUser(this.username, this.password).subscribe(res => {
            this.route.GoHome();
            alert("User " + this.username + " is created. Please log in!");
        });
    }
}
