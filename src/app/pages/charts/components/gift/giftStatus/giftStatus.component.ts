import {Component, ViewEncapsulation} from '@angular/core';
;

@Component({
  selector: 'giftStatus',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./giftStatus.scss')],
  template: require('./giftStatus.html'),
})

export class GiftStatus {

  data:any;

  constructor() {
  }

}
