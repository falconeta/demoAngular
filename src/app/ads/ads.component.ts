import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  video1: string;
  video2: string;
  video3: string;
  constructor() { }
  ngOnInit() {
    this.video1 = 'video 1';
    this.video2 = 'video 2';
    this.video3 = 'video 3';
  }

}
