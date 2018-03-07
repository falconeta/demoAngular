import { Component, OnInit } from '@angular/core';
import {Result, RootObject} from '../models/randomuser';
import { ContextService } from '../services/context.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public persona: Result;
  constructor(private contesto: ContextService) { }

  ngOnInit() {
    

    this.persona = this.contesto.getRandomUser();

  }

}
