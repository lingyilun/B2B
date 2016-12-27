import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'message-contact',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./messageContact.scss')],
  template: require('./messageContact.html'),
})

export class MessageContact {


  constructor(){}
}