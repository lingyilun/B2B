import {Component, ViewEncapsulation} from '@angular/core';
;

@Component({
  selector: 'outsourcing',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./outsourcing.scss')],
  template: require('./outsourcing.html'),
})

export class Outsourcing {

  data:any;

  constructor() {
  }

}
