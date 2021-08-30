import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customer:Customer;

  constructor(
    private customerService:CustomerService,
    private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(data=>{
      const id= +data.get('id');
      this.customerService.findById(id).subscribe(customer=>{
        console.log(customer);
        this.customer=customer;
      })
    })
  }

}
