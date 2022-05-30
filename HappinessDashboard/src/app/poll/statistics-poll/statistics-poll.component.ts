import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPoll } from 'src/app/home/home.component';
import { RatingService } from 'src/app/rating.service';
import { RoutingService } from 'src/app/routing.service';
import { PollService } from '../poll.service';
import { IComment } from 'src/app/rating.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics-poll',
  templateUrl: './statistics-poll.component.html',
  styleUrls: ['./statistics-poll.component.css']
})


export class StatisticsPollComponent implements OnInit {

  constructor(private ratingService:RatingService,
    private pollService:PollService,private activatedRoute: ActivatedRoute,private routingService:RoutingService) { }

    poll!: IPoll;
    data: any;
    chartOptions: any;
    average: number = 0;
    ratings!: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  commentList$!: Observable<IComment[]> | undefined;
    
  ngOnInit(): void {
    this.commentList$ = this.ratingService.getLastNComments(this.activatedRoute.snapshot.params['id'],5);
    this.activatedRoute.params.subscribe(params => {
      this.pollService.getPollById(params['id']).subscribe(
          {
              next: (poll) => {
                  this.poll = poll;
                  
              },
              error: (err) => {
                  
                  this.routingService.GoToErrorPage()
              },
              complete: () => this.getAverage()
          }
      )
      

  });
  }
  getAverage(){
    this.activatedRoute.params.subscribe(params => {
    this.ratingService.getAvgRating(params['id']).subscribe(
      {
          next: (average) => {
              this.average = average;
              console.log(average)
          },
          error: (err) => {
              this.average = 0
              this.getRatingList()
              
          },
          complete: () => this.getRatingList()
      }
  )
});

}

  getRatingList(){
    this.activatedRoute.params.subscribe(params => {
      this.ratingService.getRatingsByPollId(params['id']).subscribe(
        {
            next: (ratings) => {
                this.ratings = ratings;
            },
            error: (err) => {
                this.ratings = {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0
                }
                this.getPollStatistics()
                
            },
            complete: () => this.getPollStatistics()
        }
    )
  });
  }

  getPollStatistics(){
    this.data = {
      labels: ['1','2','3', '4', '5'],
      datasets: [
          {
              data: [this.ratings[1],this.ratings[2],this.ratings[3],this.ratings[4],this.ratings[5]],
              backgroundColor: [
                  "#FF6B35",
                  "#F7C59F",
                  "#EFEFD0",
                  "#004E89",
                  "#1A659E"
              ],
              hoverBackgroundColor: [
                  "#FF5A1F",
                  "#F6BB8E",
                  "#EAEAC2",
                  "#00457A",
                  "#17598C"
              ]
          }
      ]
  };

  }
  

}
