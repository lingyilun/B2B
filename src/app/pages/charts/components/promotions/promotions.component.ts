import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'promotions',
  encapsulation: ViewEncapsulation.None,
  styles: [ require('./promotions.scss')],
  template: require('./promotions.html'),
})

export class Promotions {

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
