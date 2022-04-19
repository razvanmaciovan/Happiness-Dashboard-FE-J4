import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() {

   }
  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'View polls',
                icon: 'pi pi-fw pi-list',
                url: 'http://localhost:4200/polls'
            },
            {
                label: 'Join a team',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'I already have a team', icon: 'pi pi-fw pi-users', url: 'http://localhost:4200/select'},
                    {label: 'Create team', icon: 'pi pi-fw pi-user-plus', url: 'http://localhost:4200/create'},
                ]
            }
        ];
    }
    

}
