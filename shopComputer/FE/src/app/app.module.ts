import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './client/footer/footer.component';
import {HeaderComponent} from './client/header/header.component';
import {LaptopComponent} from './client/body/laptop/laptop.component';
import {HomeComponent} from './client/body/home/home.component';
import {HighlightProductComponent} from './client/body/home/highlight-product/highlight-product.component';
import {HighlightMonitorComponent} from './client/body/home/highlight-monitor/highlight-monitor.component';
import {HighlightMouseKeysComponent} from './client/body/home/highlight-mouse-keys/highlight-mouse-keys.component';
import {HighlightAccessoriesComponent} from './client/body/home/highlight-accessories/highlight-accessories.component';
import {HighlightPcComponent} from './client/body/home/highlight-pc/highlight-pc.component';
import {ViewProductComponent} from './client/body/view-product/view-product.component';
import {PaymentComponent} from './client/body/payment/payment.component';
import {CreateComputerComponent} from './admin/product/computer/create-computer/create-computer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ListComputerComponent} from './admin/product/computer/list-computer/list-computer.component';
import {FormatTextPipe} from './customPipe/format-text.pipe';
import {RegistrationComponent} from './client/body/registration/registration.component';
import {LoginComponent} from './client/body/login/login.component';


import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {UpdateComputerComponent } from './admin/product/computer/update-computer/update-computer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { ListMonitorComponent } from './admin/product/monitor/list-monitor/list-monitor.component';
import { UpdateMonitorComponent } from './admin/product/monitor/update-monitor/update-monitor.component';
import { HomeProductComponent } from './admin/product/home-product/home-product.component';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import {AccessoriesComponent} from './client/body/accessories/accessories.component';
import { ListEmployeeComponent } from './admin/employee/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './admin/employee/create-employee/create-employee.component';
import {ClientComponent} from './client/client.component';
import { ListCustomerComponent } from './admin/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './admin/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './admin/customer/update-customer/update-customer.component';
import {ProductComponent} from './admin/product/product.component';
import { PaginationComponent } from './common/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LaptopComponent,
    HomeComponent,
    HighlightProductComponent,
    HighlightMonitorComponent,
    HighlightMouseKeysComponent,
    HighlightAccessoriesComponent,
    HighlightPcComponent,
    ViewProductComponent,
    PaymentComponent,
    CreateComputerComponent,
    FormatTextPipe,
    RegistrationComponent,
    LoginComponent,
    ListComputerComponent,
    UpdateComputerComponent,
    ListMonitorComponent,
    UpdateMonitorComponent,
    HomeProductComponent,
    AdminComponent,
    HomeAdminComponent,
    AccessoriesComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    ClientComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ProductComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase_config),
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
