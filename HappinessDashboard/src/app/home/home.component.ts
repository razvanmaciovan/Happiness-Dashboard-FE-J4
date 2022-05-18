import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface IPoll{
  title:string;
  topic_id:number;
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

  constructor(private service:ConfigService) { }
  
  pollList$: Observable<IPoll[]> | undefined;
  ngOnInit(): void {
    this.pollList$ = this.service.getPollsList();
    this.pollList$.forEach(element => {
      console.log(element);

    });
  }

  // Test(){
  //   this.service.getPollById(1).subscribe((data:Observable) => {
  //     console.log(data);
  //   });
      
  // }

}
