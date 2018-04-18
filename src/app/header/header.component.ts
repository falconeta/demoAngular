import { Component, OnInit, Input} from '@angular/core';
import { ContextService } from '../services/context.service';
import { SocialService } from '../services/social.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titolo: '';

  public notificheFacebook: number;
  public notificheTwitter: number;

  constructor(private contesto: ContextService,
              private social: SocialService) {
  }
  ngOnInit() {
    this.titolo = this.contesto.getTitle();
    this.notificheFacebook = this.social.getFacebookNotifications();
    this.notificheTwitter = this.social.getTwitterNotifications();
  }

}
