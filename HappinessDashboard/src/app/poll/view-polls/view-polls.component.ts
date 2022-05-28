import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';

@Component({
    selector: 'app-view-polls',
    templateUrl: './view-polls.component.html',
    styleUrls: ['./view-polls.component.css']
})
export class ViewPollsComponent implements OnInit {

    constructor(private pollService:PollService) { }

    ngOnInit(): void {
    }

}
