import { Component, OnInit } from '@angular/core';
import { PollService } from './poll.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { IPoll } from '../home/home.component';
import { UserService } from '../user-form/user.service';
import { RoutingService } from '../routing.service';
import { Token } from '@angular/compiler';
import { IUser } from '../user-form/user-form.component'


@Component({
    selector: 'app-poll',
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {


    poll: IPoll = {
        id: 0,
        topicName: '',
        title: '',
        status: false,
        daysTilClosing: 0
    };
    constructor(private service: PollService,
        private activatedRoute: ActivatedRoute,
        private routingService: RoutingService
    ) { }

    val!: number;
    comment!: string;
    token!:string | null;

    ngOnInit(): void {

        if (!this.routingService.isLoggedIn())
            this.routingService.GoToUserForm()

        this.activatedRoute.params.subscribe(params => {
            this.service.getPollById(params['id']).subscribe(
                {
                    next: (poll) => {
                        this.poll = poll;
                    },
                    error: (err) => {
                        console.log(err.status);
                        //this.route.navigate(['/error']);
                    },
                    complete: () => console.log('complete')
                }
            )

        });
    }

    addRating(): void {

        if(this.val == null) {
            alert("Please select a rating!")
            return
        }
        
        var usr : IUser = JSON.parse(window.atob(String(localStorage.getItem("token"))))

        console.log(usr)

    }

}
