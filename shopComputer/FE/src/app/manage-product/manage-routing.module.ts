import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComputerComponent} from './manage-computer/create-computer/create-computer.component';
import {CreateMonitorComponent} from './manage-monitor/create-monitor/create-monitor.component';
import {ListComputerComponent} from './manage-computer/list-computer/list-computer.component';


@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
