import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];
  customerTypes:CustomerType[]=[];
  flag: any;
  p=1;
  isDisplayFilter:boolean=false;
  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.getListCustomer();
    this.customerService.getCustomerType().subscribe(data=>{
      this.customerTypes=data;
    })
  }

  getListCustomer() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
      console.log(data);
    });
  }


  searchAllField(name: string,phone:string,fromAge:string,toAge:string,customerType:string) {
    if (name==""){
      name=null;
    }
    if (phone==""){
      phone=null
    }
    if (fromAge==""){
      fromAge=null
    }
    if (toAge==""){
      toAge=null
    }
    if (customerType==""){
      customerType=null
    }
    this.customerService.findAllField(name, phone, fromAge, toAge, customerType).subscribe(data=>{
      console.log("customer");
      console.log(data);
      this.customers=data;
    })
  }

  controlModal() {
    if (this.isDisplayFilter){
      this.isDisplayFilter=false;
    }else {
      this.isDisplayFilter=true;
    }
  }

  delete(id: number) {

  }

  search(value: string) {

  }

}
