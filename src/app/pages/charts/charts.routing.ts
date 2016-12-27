import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';
import { Promotions } from './components/promotions/promotions.component';
import { Order } from './components/order/order.component';
import { Outsourcing } from './components/order/outsourcing/outsourcing.component';
import { Gift } from './components/gift/gift.component';
import { GiftStatus } from './components/gift/giftStatus/giftStatus.component';
import { CommodityManagement } from './components/commodityManagement/commodityManagement.component';
import { Adjustment } from './components/commodityManagement/adjustment/adjustment.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'promotions', component: Promotions },
      { path: 'order', component: Order },
      { path: 'outsourcing', component: Outsourcing },
      { path: 'gift', component: Gift },
      { path: 'giftStatus', component: GiftStatus },
      { path: 'commodityManagement', component: CommodityManagement },
      { path: 'adjustment', component: Adjustment },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
