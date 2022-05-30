import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PollService } from './poll.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { IPoll } from '../home/home.component';
import { UserService } from '../user-form/user.service';
import { RoutingService } from '../routing.service';
import { Token } from '@angular/compiler';
import { IUser } from '../user-form/user-form.component'
import { RatingService } from '../rating.service';


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
    @ViewChild('hasVoted')
    private hasVotedElement!: ElementRef;
    @ViewChild('hasNotVoted')
    private hasNotVotedElement!: ElementRef;
    
    constructor(private pollService: PollService,
        private activatedRoute: ActivatedRoute,
        private routingService: RoutingService,
        private ratingService: RatingService
    ) { }

    val!: number;
    comment!: string;
    token!:string | null;
    hasAlreadyVoted!: boolean;

    ngOnInit(): void {
        if (!this.routingService.isLoggedIn())
        this.routingService.GoToUserForm()
        this.activatedRoute.params.subscribe(params => {
            this.pollService.getPollById(params['id']).subscribe(
                {
                    next: (poll) => {
                        this.poll = poll;
                    },
                    error: (err) => {
                        
                        this.routingService.GoToErrorPage()
                    },
                    complete: () => this.checkUserVoted()
                }
            )

        });
        
    }
    async checkUserVoted(): Promise<void> {
        var usr = JSON.parse(window.atob(String(localStorage.getItem("token"))))
        var response = await this.ratingService.proceed(this.poll.id,usr.id)
        if(response === true)
        {
            
            this.hasNotVotedElement.nativeElement.remove()
        }   
        else {
            
            this.hasVotedElement.nativeElement.remove()
        }
    }

    

    saveCurrentPollData(data: IPoll) {
        sessionStorage.setItem("viewPoll",window.btoa(JSON.stringify(data)))
      }
    getCurrentToken(): string | null {
        return localStorage.getItem("token")
    }
    
    viewResults(): void {
        this.saveCurrentPollData(this.poll)
        this.routingService.goToPollResults(this.poll.id)
    }
    addRating(): void {

        if(this.val == null) {
            alert("Please select a rating!")
            return
        }
        
        var usr : IUser = JSON.parse(window.atob(String(localStorage.getItem("token"))))
        this.ratingService.addRating(this.val,this.poll.id,this.comment,usr).subscribe()
        this.routingService.goToPollResults(this.poll.id)
        
    }


}
