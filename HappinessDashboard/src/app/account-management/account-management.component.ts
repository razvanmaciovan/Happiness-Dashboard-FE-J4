import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';
import { IUser } from '../user-form/user-form.component';
import { UserService } from '../user-form/user.service';
import { passwordStrength } from 'check-password-strength'


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

        var result = passwordStrength(this.new_password).value

        if ( result === "Too weak" || result === "Weak") {
            alert("Password too weak.")
            return
        }

        if ( passwordStrength(this.new_password).value === "Medium" && this.confirmPassword == false) {
            alert("Password strength rated at 'Medium'. Click on update password again to confirm current password.")
            this.confirmPassword = true
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
        
    }

}
