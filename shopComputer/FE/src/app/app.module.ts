import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {HeaderComponent} from './header/header.component';
import {LaptopComponent} from './body/laptop/laptop.component';
import {HomeComponent} from './body/home/home.component';
import {HighlightProductComponent} from './body/home/highlight-product/highlight-product.component';
import {HighlightMonitorComponent} from './body/home/highlight-monitor/highlight-monitor.component';
import {HighlightMouseKeysComponent} from './body/home/highlight-mouse-keys/highlight-mouse-keys.component';
import {HighlightAccessoriesComponent} from './body/home/highlight-accessories/highlight-accessories.component';
import {HighlightPcComponent} from './body/home/highlight-pc/highlight-pc.component';
import {ViewProductComponent} from './body/view-product/view-product.component';
import {NgbdRatingBasicComponent} from './body/view-product/ngbd-rating-basic/ngbd-rating-basic.component';
import {PaymentComponent} from './body/payment/payment.component';
import {RouterModule, Routes} from '@angular/router';
import {BodyModule} from './body/body.module';
import {ManageProductComponent} from './manage-product/manage-product.component';
import {ManageComputerComponent} from './manage-product/manage-computer/manage-computer.component';
import {CreateComputerComponent} from './manage-product/manage-computer/create-computer/create-computer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ManageModule} from './manage-product/manage.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedComponent} from './shared/shared.component';
import {ManageRoutingModule} from './manage-product/manage-routing.module';
import {PcAioServerComponent} from './body/pc-aio-server/pc-aio-server.component';
import {MouseKeysComponent} from './body/mouse-keys/mouse-keys.component';
import {MonitorComponent} from './body/monitor/monitor.component';
import {AccessoriesComponent} from './body/accessories/accessories.component';
import {ListComputerComponent} from './manage-product/manage-computer/list-computer/list-computer.component';
import {FormatTextPipe} from './customPipe/format-text.pipe';
import {MyGuardGuard} from './service/my-guard.guard';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'client',
    component: BodyComponent,
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
  }, {
    path: 'admin',
    component: ManageProductComponent,
    children: [
      {
        path: '',
        component: ListComputerComponent,
        outlet: 'admin'
      },
      {
        path: 'create',
        component: CreateComputerComponent,
        outlet: 'admin'
      }
    ]
  }, {
    path: 'register',
    component: RegistrationComponent
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    LaptopComponent,
    HomeComponent,
    HighlightProductComponent,
    HighlightMonitorComponent,
    HighlightMouseKeysComponent,
    HighlightAccessoriesComponent,
    HighlightPcComponent,
    ViewProductComponent,
    NgbdRatingBasicComponent,
    PaymentComponent,
    ManageProductComponent,
    ManageComputerComponent,
    CreateComputerComponent,
    SharedComponent,
    FormatTextPipe,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BodyModule,
    ReactiveFormsModule,
    ManageModule,
    HttpClientModule,
    ManageRoutingModule
  ],
  providers: [
    MyGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
