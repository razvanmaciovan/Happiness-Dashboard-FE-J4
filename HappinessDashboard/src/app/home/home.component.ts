import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { PollService } from '../poll/poll.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';
export interface IPoll{
  id:number;
  topic_id:number;
  title:string;
  status:boolean;
  dateOfCreation:Date;
  dateOfClosing:Date;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:PollService,private route:Router) { 

  }
  
  pollList$: Observable<IPoll[]> | undefined;
  ngOnInit(): void {
    this.pollList$ = this.service.getRecentPolls(20);
    this.pollList$.forEach(element => {
      console.log(element);

    });
  }

  
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
