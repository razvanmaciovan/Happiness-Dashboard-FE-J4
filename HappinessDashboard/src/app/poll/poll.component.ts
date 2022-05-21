import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PollService } from './poll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPoll } from '../home/home.component';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  

  poll:IPoll = {
    id:0,
    topic_id:0,
    title:'',
    status:false,
    dateOfCreation:new Date(),
    dateOfClosing:new Date()
  };
  constructor(private service:PollService,
    private activatedRoute:ActivatedRoute,
    private route:Router) { }

    val!:number;
    comment!: string;

  ngOnInit(): void {
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

}
