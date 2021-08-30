import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';
import {EducationService} from '../../service/education.service';
import {DepartmentService} from '../../service/department.service';
import {PositionService} from '../../service/position.service';
import {Division} from '../../model/division';
import {PositionModel} from '../../model/PositionModel';
import {Education} from '../../model/education';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  departments: Division[];
  positions: PositionModel[];
  educations: Education[];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private educationService: EducationService,
    private divisionService: DepartmentService,
    private positionService: PositionService
  ) {
    this.divisionService.findAll().subscribe(departments => {
      console.log(departments);
      this.departments = departments;
      console.log(this.departments);
    });
    this.educationService.findAll().subscribe(education => {
      this.educations = education;
    });
    this.positionService.getPosition().subscribe(positions => {
      this.positions = positions;
    });
  }

  validator = {
    employeeName: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'},
      {type: 'pattern', msg: 'Tên không đúng định dạng'}
    ], employeeBirthday: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'},
      {type: 'pattern', msg: 'Tên không đúng định dạng'}
    ], employeeIdCard: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'},
      {type: 'pattern', msg: 'Tên không đúng định dạng'}
    ], employeeSalary: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'},
      {type: 'min', msg: 'Tên không đúng định dạng'}
    ], employeePhone: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'},
      {type: 'pattern', msg: 'Đầu số 090 hoặc 091'}
    ], employeeEmail: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'},
      {type: 'pattern', msg: 'Tên không đúng định dạng'}
    ], employeeAddress: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ], educationDegree: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ], position: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ], division: [
      {type: 'required', msg: 'Làm ơn nhập trường này!'}
    ]
  };

  ngOnInit(): void {
    this.getForm();
  }

  getForm() {
    this.employeeForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*\\s)+([A-Z][a-z]*)$')]],
      employeeBirthday: ['', [Validators.required, Validators.pattern('')]],
      employeeIdCard: ['', [Validators.required, Validators.pattern('')]],
      employeeSalary: ['', [Validators.required, Validators.min(10)]],
      employeePhone: ['', [Validators.required, Validators.pattern('^(090|091|(\\+84)09)\\d{8}')]],
      employeeEmail: ['', [Validators.required,
        Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()' +
          '[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}' +
        '\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]],
      employeeAddress: ['', Validators.required],
      educationDegree: ['', Validators.required],
      position: ['', Validators.required],
      division: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      Object.keys(this.employeeForm.controls).forEach(field => {
        const control = this.employeeForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      let employee: Employee = this.employeeForm.value;
      this.employeeService.createForm(employee).subscribe(response => {
        this.notify();
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.employeeForm.reset(true);
  }

  notify() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tạo mới thành công!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
