import {Component, ViewEncapsulation} from '@angular/core';
;

@Component({
  selector: 'commodityManagement',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./commodityManagement.scss')],
  template: require('./commodityManagement.html'),
})

export class CommodityManagement {

  data:any;

  constructor() {
  }

}