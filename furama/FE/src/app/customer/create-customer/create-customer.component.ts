import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import Swal from 'sweetalert2';
import {Feature} from '../../feature/feature.class';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  custumerTypes:CustomerType[]=[];

  constructor(private fb:FormBuilder,
              private customerService:CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getCustomerType().subscribe(data=>{
      console.log(data);
      this.custumerTypes=data;
    })
    this.customerForm=this.fb.group({
      customerName:['',[Validators.required,Validators.pattern('^([A-Z][a-z]*\\s)+([A-Z][a-z]*)$')]],
      customerBirthday:['',[Validators.required,Feature.checkAge]],
      customerGender:['',Validators.required],
      customerIdCard:['',Validators.required,Validators.pattern('^\\d{9}$')],
      customerPhone:['',[Validators.required,Validators.pattern('^(090|091|(\\+84)09)\\d{7}$')]],
      customerEmail:['',[Validators.required,Validators
        .pattern('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
          '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]],
      customerAddress:['',Validators.required],
      customerType:['',Validators.required]
    })
  }

  resetForm() {
    this.customerForm.reset(true);
  }

  onSubmit() {
    if (this.customerForm.invalid) {
      Object.keys(this.customerForm.controls).forEach(field => {
        const control = this.customerForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    }else {
      const customer:Customer=this.customerForm.value;
      this.customerService.create(customer).subscribe(()=>{
        this.resetForm();
        this.notify();
      })
    }
  }

  notify() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'T???o m???i th??nh c??ng!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  validator = {
    customerName: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'},
      {type: 'pattern', msg: 'T??n kh??ng ????ng ?????nh d???ng'}
    ],customerGender: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'},
      {type: 'pattern', msg: 'T??n kh??ng ????ng ?????nh d???ng'}
    ], customerBirthday: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'},
      {type: 'NotEnoughAge', msg: 'Tu???i c???n l???n h??n 18'}
    ], customerIdCard: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'},
      {type: 'pattern', msg: 'IdCard kh??ng ????ng ?????nh d???ng'}
    ], customerAddress: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'},
      {type: 'min', msg: '?????a ch??? kh??ng ????ng ?????nh d???ng'}
    ], customerPhone: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'},
      {type: 'pattern', msg: '?????u s??? 090 ho???c 091'}
    ], customerEmail: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'},
      {type: 'pattern', msg: 'Email kh??ng ????ng ?????nh d???ng'}
    ], customerType: [
      {type: 'required', msg: 'L??m ??n nh???p tr?????ng n??y!'}]
  };
}
