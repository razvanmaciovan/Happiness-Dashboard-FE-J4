import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {

   }

   items: MenuItem[] = [];
   
   CreateTeam() {
       console.log("Create team");
   }
   ViewPoll() {
       console.log("View polls");
   }
   SelectTeam() {
         console.log("Select team");
   }
    ngOnInit(): void{
        this.items = [
            {
                label: 'View polls',
                icon: 'pi pi-fw pi-list',
                url: 'http://localhost:4200/polls',
                command: (event) => this.ViewPoll()
            },
            {
                label: 'Join a team',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'I already have a team', icon: 'pi pi-fw pi-users', url: 'http://localhost:4200/select', command: (event) => this.SelectTeam()},
                    {label: 'Create team', icon: 'pi pi-fw pi-user-plus', url: 'http://localhost:4200/create', command: (event) => this.CreateTeam() },
                ]
            }
        ];
    }
    

}
