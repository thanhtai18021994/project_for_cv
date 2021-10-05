import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './client/body/home/home.component';
import {LaptopComponent} from './client/body/laptop/laptop.component';
import {PcAioServerComponent} from './client/body/pc-aio-server/pc-aio-server.component';
import {MouseKeysComponent} from './client/body/mouse-keys/mouse-keys.component';
import {MonitorComponent} from './client/body/monitor/monitor.component';
import {AccessoriesComponent} from './client/body/accessories/accessories.component';
import {ViewProductComponent} from './client/body/view-product/view-product.component';
import {PaymentComponent} from './client/body/payment/payment.component';

import {ListComputerComponent} from './admin/product/computer/list-computer/list-computer.component';
import {CreateComputerComponent} from './admin/product/computer/create-computer/create-computer.component';
import {CreateMonitorComponent} from './admin/product/monitor/create-monitor/create-monitor.component';
import {AdminComponent} from './admin/admin.component';
import {ClientComponent} from './client/client.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {ListEmployeeComponent} from './admin/employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './admin/employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './admin/employee/update-employee/update-employee.component';
import {ProductComponent} from './admin/product/product.component';
import {ListMonitorComponent} from './admin/product/monitor/list-monitor/list-monitor.component';
import {UpdateMonitorComponent} from './admin/product/monitor/update-monitor/update-monitor.component';
import {HomeProductComponent} from './admin/product/home-product/home-product.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        outlet: 'client'
      },
      {
        path: 'laptop',
        component: LaptopComponent,
        outlet: 'client'
      },
      {
        path: 'pc-aio-server',
        component: PcAioServerComponent,
        outlet: 'client'
      }, {
        path: 'mouse-key',
        component: MouseKeysComponent,
        outlet: 'client'
      }, {
        path: 'monitor',
        component: MonitorComponent,
        outlet: 'client'
      }, {
        path: 'accessories',
        component: AccessoriesComponent,
        outlet: 'client'
      }, {
        path: 'view',
        component: ViewProductComponent,
        outlet: 'client',
      },
      {
        path: 'payment',
        component: PaymentComponent,
        outlet: 'client'
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: HomeAdminComponent,
        outlet: 'admin'
      },
      {
        path: 'employee/list',
        component: ListEmployeeComponent,
        outlet: 'admin'
      }, {
        path: 'employee/create',
        component: CreateEmployeeComponent,
        outlet: 'admin'
      }, {
        path: 'employee/update/:id',
        component: UpdateEmployeeComponent,
        outlet: 'admin'
      }, {
        path: 'product',
        component: ProductComponent,
        outlet: 'admin',
        children: [
          {
            path: 'computer/list',
            component: ListComputerComponent,
            outlet: 'product'
          }, {
            path: 'computer/create',
            component: CreateComputerComponent,
            outlet: 'product'
          }, {
            path: 'monitor/list',
            component: ListMonitorComponent,
            outlet: 'product'
          }, {
            path: 'monitor/create',
            component: CreateMonitorComponent,
            outlet: 'product'
          }, {
            path: 'monitor/update/:id',
            component: UpdateMonitorComponent,
            outlet: 'product'
          }, {
            path: 'home',
            component: HomeProductComponent,
            outlet: 'product'
          }
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {
}

