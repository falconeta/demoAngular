import { Component, OnInit, Input } from '@angular/core';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() trademark;
  constructor(private contesto: ContextService) {
    this.trademark = this.contesto.getTrademark();
  }

  ngOnInit() {
  }

}
