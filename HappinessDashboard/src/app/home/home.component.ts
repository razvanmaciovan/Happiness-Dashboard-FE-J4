import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfigService } from '../config.service';
import { PollService } from '../poll/poll.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { ITopic, TopicService} from '../topic.service';
export interface IPoll{
  id:number;
  topicName:string;
  title:string;
  status:boolean;
  daysTilClosing:number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:PollService,private route:Router,private topicService:TopicService) { 

  }
  
  pollList$: Observable<IPoll[]> | undefined;
  ngOnInit(): void {
    this.pollList$ = this.service.getRecentPolls(12);
    
    
  }
  
  
  // public getTopicNameFromPoll(topic_id:number):string{
  //   this.topicService.getTopicById(topic_id).subscribe(
  //     {
  //         next: (topic) => {
  //           return topic.name;
  //         },
  //         error: (err) => {

  //           console.log(err.status);
  //           //this.route.navigate(['/error']);
  //         },
  //         complete: () => console.log('complete')
  //       });
  //       return "TEST";
  //     }
    

  
  public openPoll(poll:IPoll):void{
    this.route.navigate(['/poll',poll.id]);
    //alert("Poll " + poll.id + " is opened");
  }
  // Test(){
  //   this.service.getPollById(1).subscribe((data:Observable) => {
  //     console.log(data);
  //   });
      
  // }

}
