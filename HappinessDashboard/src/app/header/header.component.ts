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
  
   
   CreatePoll() {
       console.log("Create team");
   }
   GoToUserForm() {
       if(this.router.url === '/home') window.scrollTo({top:window.innerHeight, behavior: 'smooth'});
       else this.router.navigate(['/user-form']);
   }

    ngOnInit(): void{
      this.items = [
          {
              label: 'Polls',
              icon: 'pi pi-fw pi-list',
              items: [
                  {label: 'Discover', icon: 'pi pi-fw pi-ticket',  routerLink: ['/discover/']},
                  {label: 'Create Poll', icon: 'pi pi-fw pi-plus',  command: (event) => this.CreatePoll()},
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
      });
      // console.log(this.topics) // enable for debug only. do not push to repo

    }
    

}
