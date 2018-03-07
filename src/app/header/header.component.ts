import { Component, OnInit, Input} from '@angular/core';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titolo: '';
  constructor(private contesto: ContextService) { }
  ngOnInit() {
    this.titolo = this.contesto.getTitle();
  }

}
