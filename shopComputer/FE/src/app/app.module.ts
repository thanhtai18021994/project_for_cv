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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

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
import {CreateMonitorComponent} from './admin/product/monitor/create-monitor/create-monitor.component';
import { ListKeyboardComponent } from './admin/product/keyboard/list-keyboard/list-keyboard.component';
import { CreateKeyboardComponent } from './admin/product/keyboard/create-keyboard/create-keyboard.component';
import { UpdateKeyboardComponent } from './admin/product/keyboard/update-keyboard/update-keyboard.component';
import { ViewKeyboardComponent } from './admin/product/keyboard/view-keyboard/view-keyboard.component';
import { ListMouseComponent } from './admin/product/mouse/list-mouse/list-mouse.component';
import { CreateMouseComponent } from './admin/product/mouse/create-mouse/create-mouse.component';
import { UpdateMouseComponent } from './admin/product/mouse/update-mouse/update-mouse.component';
import { ViewMouseComponent } from './admin/product/mouse/view-mouse/view-mouse.component';
import { ViewComputerComponent } from './admin/product/computer/view-computer/view-computer.component';
import { ViewMonitorComponent } from './admin/product/monitor/view-monitor/view-monitor.component';
import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtInterceptor} from './interceptor/jwt.interceptor';
import { InboxBoxComponent } from './client/body/inbox/inbox-box/inbox-box.component';
import { FeedComponent } from './client/body/inbox/feed/feed.component';
import { MessageComponent } from './client/body/inbox/message/message.component';
import { SignupComponent } from './client/body/inbox/signup/signup.component';
import { ChatroomComponent } from './client/body/inbox/chatroom/chatroom.component';
import { ChatformComponent } from './client/body/inbox/chatform/chatform.component';
import {ListRoomComponent} from './admin/adminInbox/list-room/list-room.component';
import {ManageChatFormComponent} from './admin/adminInbox/manage-chat-form/manage-chat-form.component';
import {ManageChatRoomComponent} from './admin/adminInbox/manage-chat-room/manage-chat-room.component';
import {ManageFeedComponent} from './admin/adminInbox/manage-feed/manage-feed.component';
import {ManageLoginComponent} from './admin/adminInbox/manage-login/manage-login.component';
import {ManageMessageComponent} from './admin/adminInbox/manage-message/manage-message.component';


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
    CreateMonitorComponent,
    ListKeyboardComponent,
    CreateKeyboardComponent,
    UpdateKeyboardComponent,
    ViewKeyboardComponent,
    ListMouseComponent,
    CreateMouseComponent,
    UpdateMouseComponent,
    ViewMouseComponent,
    ViewComputerComponent,
    ViewMonitorComponent,
    InboxBoxComponent,
    FeedComponent,
    MessageComponent,
    SignupComponent,
    ChatroomComponent,
    ChatformComponent,
    ListRoomComponent,
    ManageChatFormComponent,
    ManageChatRoomComponent,
    ManageFeedComponent,
    ManageLoginComponent,
    ManageMessageComponent
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
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
