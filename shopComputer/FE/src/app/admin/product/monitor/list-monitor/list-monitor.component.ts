import { Component, OnInit } from '@angular/core';
import {Monitor} from '../../../../model/monitor.interface';
import {MonitorService} from '../../../../service/monitor.service';
import {ActivatedRoute} from '@angular/router';
import {Manufacture} from '../../../../model/manufacture.interface';
import {ExtraService} from '../../../../service/extra.service';

@Component({
  selector: 'app-list-monitor',
  templateUrl: './list-monitor.component.html',
  styleUrls: ['./list-monitor.component.css']
})
export class ListMonitorComponent implements OnInit {
  monitorList:Monitor[];
  page:any;
  nameSearch: any;
  controlFilter: Boolean[]=[];
  manufactureSearch: any;
  manufactures: Manufacture[];
  constructor(
    private monitorService:MonitorService,
    private extraService:ExtraService,
    private router:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.extraService.getManufacture().subscribe(data=>{
      this.manufactures=data;
    })
    this.monitorService.getAllByPagination({page:0,size:5}).subscribe(data=>{
      this.monitorList=data['content'];
      this.page=data;
    })
  }

  getProd(request){
    this.monitorService.getAllByPagination(request).subscribe(data=>{
      this.monitorList=data['content'];
      this.page=data;
    })
  }
  getProdByName(request){
    this.monitorService.findByName(this.nameSearch,request).subscribe(data=>{
      this.monitorList=data['content'];
      this.page=data;
    })
  }
  getProdByManufacture(request){
    this.monitorService.findByManufacture(+this.manufactureSearch,request).subscribe(data=>{
      this.monitorList=data['content'];
      this.page=data;
    })
  }

  filterBy(value: string) {
    switch (value) {
      case '1':
        for (let i = 0; i < this.controlFilter.length; i++) {
          if (i == 0) {
            this.controlFilter[i] = true;
          } else {
            this.controlFilter[i] = false;
          }
        }
        break;
      case '2':
        for (let i = 0; i < this.controlFilter.length; i++) {
          if (i == 1) {
            this.controlFilter[i] = true;
          } else {
            this.controlFilter[i] = false;
          }
        }
        break;
    }
  }

  filter() {
    const request ={page:0,size:5};
    if (this.controlFilter[0]){
      this.getProdByName(request);
    }else if(this.controlFilter[1]){
      this.getProdByManufacture(request);
    }
  }

  deleteItem(monitorId: number) {
    this.monitorService.delete(monitorId).subscribe(()=>{
      this.ngOnInit();
    })
  }

  goToPage(number: number) {
    const request={page:number,size:5};
    if (this.nameSearch){
      this.getProdByName(request)
    }else if(this.manufactureSearch){
      this.getProdByManufacture(request);
    }else {
      this.getProd(request);
    }
  }
}
