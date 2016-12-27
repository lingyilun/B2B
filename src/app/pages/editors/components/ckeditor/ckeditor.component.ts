import { Component, ViewEncapsulation } from '@angular/core';
import { MessagesTablesService } from './messages.service';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ckeditor-component',
  encapsulation: ViewEncapsulation.None,
  template: require('./ckeditor.html'),
  styles: [require('./ckeditor.scss')]
})

export class Ckeditor {

  settings = {
    columns: {
      id: {
        title: 'No',
        type: 'number'
      },
      firstName: {
        title: '標題',
        type: 'string'
      },
      lastName: {
        title: '公告類型',
        type: 'string'
      },
      username: {
        title: '公告開始日期',
        type: 'data'
      },
      email: {
        title: '公告結束日期',
        type: 'data'
      },
      age: {
        title: '閱讀狀況',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: MessagesTablesService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
