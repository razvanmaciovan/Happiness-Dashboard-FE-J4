import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ITopic } from '../topic.service'
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  items: MenuItem[] = [];

  topics: ITopic[] = [];
  selectedTopics: ITopic[] = [];

  constructor(private topicService : TopicService, private router: Router) {
  }

  ngDoCheck() {
    // console.log(this.selectedTopics) // uncomment for debug only
  }
   
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

      console.log("init")

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

      this.topicService.getTopicList().subscribe(topics => {
        this.topics = topics as ITopic[];
        console.log(topics);
      });

    }
    

}
