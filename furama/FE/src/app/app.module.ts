import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {ViewEmployeeComponent} from './employee/view-employee/view-employee.component';
import {EmployeeComponent} from './employee/employee.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import {ContractComponent} from './contract/contract.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ViewContractComponent} from './contract/view-contract/view-contract.component';
import {UpdateContractComponent} from './contract/update-contract/update-contract.component';
import {UserGuardGuard} from './guard/user-guard.guard';
import {UserService} from './service/security/user.service';
import {TokenInterceptor} from './interceptor/token.interceptor';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';


import {CustomerGuardGuard} from './guard/customer-guard.guard';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';

import {EmployeeGuard} from './guard/employee.guard';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import {DatePipe} from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';


const routing: Routes = [
  {
    path: '',
    component: AppComponent
  }, {
    path: 'home',
    component: HomeComponent
  },{
  path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: ListAccountComponent,
        outlet: 'account'
      },
      {
        path: '',
        component: UpdateAccountComponent,
        outlet: 'update'
      }
    ]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate:[CustomerGuardGuard],
    children: [
      {
        path: '',
        component: ListEmployeeComponent,
        outlet: 'employee'
      },
      {
        path: 'create',
        component: CreateEmployeeComponent,
        outlet: 'employee'
      }, {
        path: 'update/:id',
        component: UpdateEmployeeComponent,
        outlet: 'employee'
      }, {
        path: 'view/:id',
        component: ViewEmployeeComponent,
        outlet: 'employee'
      }
    ]
  }, {
    path: 'contract',
    component: ContractComponent,
    canActivate: [EmployeeGuard],
    children: [
      {
        path: '',
        component: ListContractComponent,
        outlet: 'contract'

      },
      {
        path: 'create',
        component: CreateContractComponent,
        outlet: 'contract'
      },
      {
        path: 'view/:id',
        component: ViewContractComponent,
        outlet: 'contract'
      }, {
        path: 'update/:id',
        component: UpdateContractComponent,
        outlet: 'contract'
      }
    ]
  },{
    path: 'customer',
    component: CustomerComponent,
    canActivate: [CustomerGuardGuard],
    children: [
      {
        path: '',
        component: ListCustomerComponent,
        outlet: 'customer'
      },
      {
        path: 'view/:id',
        component: ViewCustomerComponent,
        outlet: 'customer'
      },
      {
        path: 'create',
        component: CreateCustomerComponent,
        outlet: 'customer'
      },
      {
        path: 'update/:id',
        component: UpdateCustomerComponent,
        outlet: 'customer'
      },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    EmployeeComponent,
    ContractComponent,
    ListContractComponent,
    CreateContractComponent,
    ViewContractComponent,
    UpdateContractComponent,
    ListCustomerComponent,
    ViewCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    AccountComponent,
    ListAccountComponent,
    CreateAccountComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return localStorage.getItem('token');
        }}})
  ],
  providers: [
    UserService,
    UserGuardGuard,
    JwtHelperService,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
