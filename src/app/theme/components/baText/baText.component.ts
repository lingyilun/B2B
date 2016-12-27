import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ba-text',
  styles: [require('./BaText.scss')],
  template: require('./BaText.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaText {

  constructor() {}
}
