import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PollService } from './poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  constructor(private service:PollService) { }

  ngOnInit(): void {
    this.service.getPollById(88).subscribe((data:any) => {
      alert(data.status)
    });
  }

}
