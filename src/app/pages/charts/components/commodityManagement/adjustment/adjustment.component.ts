import {Component, ViewEncapsulation} from '@angular/core';
;

@Component({
  selector: 'adjustment',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./adjustment.scss')],
  template: require('./adjustment.html'),
})

export class Adjustment {
  name: string;

  constructor() {
  	this.name = "未選擇任何檔案";
  }

  tack(){
    this.name ="TEXT";
  }

}