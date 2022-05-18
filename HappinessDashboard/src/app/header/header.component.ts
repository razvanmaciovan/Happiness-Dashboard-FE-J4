import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

interface Topic {
  name: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {

    this.topics = [
        {name: 'Topic1'},
        {name: 'Topic2'},
        {name: 'Topic3'}
    ];
    this.selectedTopics = []
  }

   items: MenuItem[] = [];

   topics: Topic[];

   selectedTopics: Topic[];
   
   CreateTeam() {
       console.log("Create team");
   }
   ViewPoll() {
       console.log("View polls");
   }
   SelectTeam() {
         console.log("Select team");
   }
   GoToUserForm() {
       if(this.router.url === '/home')
        window.scrollTo({top:window.innerHeight, behavior: 'smooth'});
   }

    ngOnInit(): void{
        this.items = [
            {
                label: 'View polls',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/user-form'],
                command: (event) => this.ViewPoll()
            },
            {
                label: 'Join a team',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'I already have a team', icon: 'pi pi-fw pi-users', url: 'http://localhost:4200/select', command: (event) => this.SelectTeam()},
                    {label: 'Create team', icon: 'pi pi-fw pi-user-plus', url: 'http://localhost:4200/create', command: (event) => this.CreateTeam() },
                ]
            },
            {
                label: 'Manage account',
                icon: 'pi pi-fw pi-cog',
                command: (event) => this.GoToUserForm()
            }
        ];
    }
    

}
