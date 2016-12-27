import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gift',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./gift.scss')],
  template: require('./gift.html'),
})

export class Gift {

  data:any;
  output: string;

  constructor(private router: Router) {
  }

  opened() {
        this.output = '(opened)';
    }

    navigate() {
        this.router.navigateByUrl('/hello');
    }

}
