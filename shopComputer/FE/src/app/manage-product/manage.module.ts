import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { CreateMonitorComponent } from './manage-monitor/create-monitor/create-monitor.component';
import { CreateCategoryComponent } from './manage-computer/create-category/create-category.component';
import { ListComputerComponent } from './manage-computer/list-computer/list-computer.component';


@NgModule({
  declarations: [CreateMonitorComponent, CreateCategoryComponent, ListComputerComponent],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
