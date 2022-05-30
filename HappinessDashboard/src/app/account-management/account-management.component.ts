import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-account-management',
    templateUrl: './account-management.component.html',
    styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.log("test");
    }

}
