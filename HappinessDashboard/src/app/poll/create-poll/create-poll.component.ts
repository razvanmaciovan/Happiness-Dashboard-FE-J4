import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPoll } from 'src/app/home/home.component';
import { TopicService } from 'src/app/topic.service';
import { PollService } from '../poll.service';


@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  comment:string | undefined;
  title!: string;
  daysTillClosing:number = 0;
  selectedTopic!:string
  topics:string[] = [];
  categories:string[] = ['Public', 'Private'];
  selectedCategory!:string;
  constructor(private service:PollService,private topicService:TopicService,private router:Router) { }
  poll : any = {
    title:this.title,
    daysTilClosing:this.daysTillClosing,
    topicName:this.selectedTopic,
    status:true
  };
  ngOnInit(): void {
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
  createPoll(){
    let statusConv:boolean
    if(this.selectedCategory == "Public"){
      statusConv = true;
    }
    else{
      statusConv = false;
    }
    this.service.createPoll(this.title,this.daysTillClosing,this.topics.indexOf(this.selectedTopic)+1,statusConv).subscribe();
    this.router.navigate(['']);
  }
  
  

}
