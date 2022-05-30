import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';


@Component({
    selector: 'app-account-management',
    templateUrl: './account-management.component.html',
    styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

    constructor(private routingService: RoutingService) { }

    ngOnInit(): void {
        
    }

    signOut(event : any) {
        localStorage.removeItem("token")
        this.routingService.GoHome()
    }

}
