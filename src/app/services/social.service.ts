import { Injectable } from '@angular/core';

@Injectable()
export class SocialService {
  private numberNotifiche = 5;
  private numberTwitter = 2;

  constructor() { }

  getFacebookNotifications(){
    return this.numberNotifiche;
  }

  getTwitterNotifications(){
    return this.numberTwitter;
  }
}
