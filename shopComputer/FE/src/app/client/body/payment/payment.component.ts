import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComputerService} from '../../../service/computer.service';
import {Computer} from '../../../model/computer.interface';
import {OrderService} from '../../../service/order.service';
import {Observable} from 'rxjs';
import {Order} from '../../../model/order.interfae';
import {CartService} from '../../../service/cart.service';
import {ProductInOrder} from '../../../model/productInOrder.interface';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user.interface';
import {AddressService} from '../../../service/address.service';
import {Province} from '../../../model/province.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Districts} from '../../../model/districts.interface';
import {Ward} from '../../../model/ward.interface';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  order$: Observable<Order>;
  productInOrders:ProductInOrder[];
  total:number=0;
  provinces:Province[];
  districts:Districts[];
  wards:Ward[];
  private currentUser:User;
  isChooseAddress=false;
  isChooseProvince=true;
  isChooseDistrict=true;
  isChooseWard=true;
  isChooseStreet=true;
  formAddress:FormGroup;
  isDisplayProvince:boolean=false;
  isDisplayDistrict:boolean=false;
  isDisplayWard:boolean=false;
  province:string='';
  district:string='';
  ward:string='';
  address:string="";
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private cartService:CartService,
    private userService:UserService,
    private addressService:AddressService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {
    this.formAddress=this.formBuilder.group({
      province:[]
    })
    this.cartService.getCart().subscribe(data=>{
      this.productInOrders=data;
      for (let i = 0; i < this.productInOrders.length; i++) {
        this.total+=(this.productInOrders[i].productPrice*this.productInOrders[i].count)
      }
    })
    this.userService.getPrincipal().subscribe(data=>{
      this.currentUser=data;
    })
    this.addressService.getProvinces().subscribe(data=>{
      this.provinces=data;
    })
  }
  chooseAddress(element: HTMLInputElement) {
    this.isChooseAddress=element.checked;
  }

  cancelChooseAddress() {
    this.isChooseAddress=false;

  }

  chooseProvince(code: number) {
    this.isDisplayProvince=false;
    for (let i = 0; i < this.provinces.length; i++) {
      if (this.provinces[i].code==code){
        this.province=this.provinces[i].name;
        this.districts=this.provinces[i].districts;
        break;
      }
    }
    this.isChooseDistrict=false;
  }

  controlProvince() {
    this.isDisplayProvince=true;
  }

  controlDistrict() {
    this.isDisplayDistrict=true;
  }

  chooseDistrict(code: string) {
    this.isDisplayDistrict=false;
    for (let i = 0; i < this.districts.length; i++) {
      if (this.districts[i].code==code){
        this.district=this.districts[i].name;
        this.wards=this.districts[i].wards;
        break;
      }
    }
    this.isChooseWard=false;
  }

  controlWard() {
    this.isDisplayWard=true;
  }

  chooseWard(code: number) {
    this.isDisplayWard=false;
    for (let i = 0; i < this.wards.length; i++) {
      if (this.wards[i].code==code){
        this.ward=this.wards[i].name;
        break;
      }
    }
    this.isChooseStreet=false;
  }

  increase() {
  }

  decrease() {

  }

  createStreet(value) {
    const address=`${value},${this.ward},${this.district},${this.province}`;
    this.currentUser.address=address;
    this.userService.update(this.currentUser,this.currentUser.id).subscribe(data=>{
      console.log("oke");
    })
  }

  checkout() {
    this.cartService.checkout().subscribe(_=>{
      console.log("checkout thành công");
      this.ngOnInit();
    })
  }
}
