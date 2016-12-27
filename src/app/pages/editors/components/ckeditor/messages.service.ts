import {Injectable} from '@angular/core';

@Injectable()
export class MessagesTablesService {

  messagesTableData = [
    {
      id: 1,
      firstName: '財務部公告105年結帳時間',
      lastName: '財務公告',
      username: '2015/12/01',
      email: '2016/12/31',
      age: '已閱讀'
    },
    {
      id: 2,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/02',
      email: '2016/12/31',
      age: '已閱讀'
    },
    {
      id: 3,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/03',
      email: '2016/12/31',
      age: '已閱讀'
    },
    {
      id: 4,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/04',
      email: '2016/12/31',
      age: '已閱讀'
    },
    {
      id: 5,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/05',
      email: '2016/12/31',
      age: '已閱讀'
    },
    {
      id: 6,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/06',
      email: '2016/12/31',
      age: '已閱讀'
    },
    {
      id: 7,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/07',
      email: '2016/12/31',
      age: '已閱讀'
    },
    {
      id: 8,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/08',
      email: '2016/12/31',
      age: '未閱讀'
    },
    {
      id: 9,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/09',
      email: '2016/12/31',
      age: '未閱讀'
    },
    {
      id: 10,
      firstName: '發票開立錯誤退回作業及丁種字軌取號授權注意事項',
      lastName: '財務公告',
      username: '2015/12/09',
      email: '2016/12/31',
      age: '未閱讀'
    },
    {
      id: 11,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mark',
      email: 'mark@gmail.com',
      age: '38'
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.messagesTableData);
      }, 2000);
    });
  }
}
