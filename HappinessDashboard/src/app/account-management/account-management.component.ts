import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';
import { IUser } from '../user-form/user-form.component';
import { UserService } from '../user-form/user.service';


@Component({
    selector: 'app-account-management',
    templateUrl: './account-management.component.html',
    styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {
    
    username : string = "username"

    usr : any;

    old_password : string = "";
    new_password : string = "";
    confirm_new_password : string = "";

    constructor(private routingService: RoutingService, private userService : UserService) {
        
    }
    

    ngOnInit(): void {
        this.usr = JSON.parse(window.atob(String(localStorage.getItem("token"))))

        this.username = this.usr.username

    }

    signOut(event : any) {
        localStorage.removeItem("token")
        this.routingService.GoHome()
    }

    confirmPassword : boolean = false;

    updatePassword(event : any) {

        if ( this.old_password != this.usr.password) {
            alert("Incorrect old passsword.")
            return
        }

        if ( this.new_password != this.confirm_new_password) {
            alert("Password mismatch.")
            return
        }


        if(this.confirmPassword)
            this.confirmPassword = false

        var temp : IUser= {
            userId : this.usr.id,
            userName : this.usr.username,
            userPassword : this.new_password
        }
        this.userService.updateUser(temp).subscribe()
        setTimeout(() => {this.routingService.GoHome()},1000)
        
        
    }

}
