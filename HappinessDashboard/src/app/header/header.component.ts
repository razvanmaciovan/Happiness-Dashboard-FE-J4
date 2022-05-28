import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RoutingService } from '../routing.service';
import { ITopic } from '../topic.service'
import { TopicService } from '../topic.service';
import { UserService } from '../user-form/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

    items: MenuItem[] = [];

    topics: ITopic[] = [];
    selectedTopics: ITopic[] = [];

    constructor(private topicService: TopicService, private routingService: RoutingService, private userService: UserService) {
    }

    ngDoCheck() {
        // console.log(this.selectedTopics) // uncomment for debug only
    }


    CreatePoll() {
        this.routingService.router.navigate(['/create']);
    }

    showTopicList(): boolean {
        if (this.routingService.router.url === '/discover') return true
        return false
    }

    ngOnInit(): void {
        this.items = [
            {
                label: '',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/home']
            },
            {
                label: 'Polls',
                icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Discover', icon: 'pi pi-fw pi-ticket', routerLink: ['/discover/'] },
                    { label: 'Create Poll', icon: 'pi pi-fw pi-plus', command: (event) => this.CreatePoll() },
                ]
            },
            {
                label: 'Manage account',
                icon: 'pi pi-fw pi-cog',
                command: (event) => this.routingService.GoToUserForm()
            }
        ];

        this.topicService.getTopicList().subscribe(topics => {
            this.topics = topics as ITopic[];
        });
        // console.log(this.topics) // enable for debug only. do not push to repo

    }


}
