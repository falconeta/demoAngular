import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public persona: Persona;

  constructor(private contesto: ContextService) {
  }

  ngOnInit() {
    this.persona = this.contesto.getDatiPersona();
  }

}
