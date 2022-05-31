import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { IPoll } from 'src/app/home/home.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-polls',
    templateUrl: './view-polls.component.html',
    styleUrls: ['./view-polls.component.css']
})
export class ViewPollsComponent implements OnInit {

    constructor(private pollService:PollService,private route:Router) { }

    pollList$: Observable<IPoll[]> | undefined;
    ngOnInit(): void {
        this.pollList$ = this.pollService.getPollsList();
    }

    public openPoll(poll: IPoll): void {
        this.route.navigate(['/poll', poll.id]);
        //alert("Poll " + poll.id + " is opened");
      }

}
