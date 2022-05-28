import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { TopicService } from 'src/app/topic.service';
import { PollService } from '../poll.service';


@Component({
    selector: 'app-create-poll',
    templateUrl: './create-poll.component.html',
    styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

    comment: string | undefined;
    title!: string;
    daysTillClosing: number = 0;
    selectedTopic!: string
    topics: string[] = [];
    categories: string[] = ['Public', 'Private'];
    selectedCategory!: string;

    constructor(private service: PollService,
        private topicService: TopicService,
        private routingService: RoutingService
    ) { }

    poll: any = {
        title: this.title,
        daysTilClosing: this.daysTillClosing,
        topicName: this.selectedTopic,
        status: true
    };

    ngOnInit(): void {

        if (!this.routingService.isLoggedIn())
            this.routingService.GoToUserForm()

        this.daysTillClosing = 0;
        this.selectedCategory = this.categories[0];
        this.topicService.getTopicList().subscribe(topics => {
            topics.forEach(topic => {
                this.topics.push(topic.name);
            }
            );
            this.selectedTopic = this.topics[0];
        }
        );
    }

    createPoll() {
        let statusConv: boolean
        if (this.selectedCategory == "Public") {
            statusConv = true;
        }
        else {
            statusConv = false;
        }
        this.service.createPoll(this.title, this.daysTillClosing, this.topics.indexOf(this.selectedTopic) + 1, statusConv).subscribe();
        this.routingService.router.navigate(['']);
    }

}
