import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './charts.routing';
import { Charts } from './charts.component';
import { Order } from './components/order/order.component';
import { Outsourcing } from './components/order/outsourcing/outsourcing.component';
import { Gift } from './components/gift/gift.component';
import { GiftStatus } from './components/gift/giftStatus/giftStatus.component';
import { CommodityManagement } from './components/commodityManagement/commodityManagement.component';
import { Adjustment } from './components/commodityManagement/adjustment/adjustment.component';
import { Promotions } from './components/promotions/promotions.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2Bs3ModalModule,
    Ng2DatetimePickerModule
  ],
  declarations: [
    Charts,
    Promotions,
    Order,
    Outsourcing,
    Gift,
    GiftStatus,
    CommodityManagement,
    Adjustment
  ],
  providers: [
  ]
})
export default class ChartsModule {}
