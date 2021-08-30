import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LaptopComponent} from './laptop/laptop.component';
import {MouseKeysComponent} from './mouse-keys/mouse-keys.component';
import {MonitorComponent} from './monitor/monitor.component';
import {PaymentComponent} from './payment/payment.component';
import {PcAioServerComponent} from './pc-aio-server/pc-aio-server.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {SharedComponent} from '../shared/shared.component';


@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})

export class BodyRoutingModule {
}
