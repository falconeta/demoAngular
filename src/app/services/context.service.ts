import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {
  private titolo ;
  private trademark;
  constructor() {
    this.titolo = 'DSGroup';
    this.trademark = '©';
  }
  getTitle() {
    return this.titolo;
  }
  getTrademark() {
    return this.trademark + this.titolo;
  }
}
