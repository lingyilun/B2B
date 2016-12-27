import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'order',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./order.scss')],
  template: require('./order.html'),
})

export class Order {

  output: string;

	constructor(private router: Router) { }
 	closed() {
        this.output = '(closed) ' ;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
    	console.log("hi")
        this.output = '(opened)';
    }
}
