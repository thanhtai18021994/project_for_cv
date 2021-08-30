import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';
import {ActivatedRoute} from '@angular/router';
import {EducationService} from '../../service/education.service';
import {DepartmentService} from '../../service/department.service';
import {PositionService} from '../../service/position.service';
import {Division} from '../../model/division';
import {PositionModel} from '../../model/PositionModel';
import {Education} from '../../model/education';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  departments: Division[];
  positions: PositionModel[];
  educations: Education[];
  currentEmployee: Employee;
  id:number;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private educationService: EducationService,
    private departmentService: DepartmentService,
    private positionService: PositionService,
    private activatedRouter: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.departmentService.findAll().subscribe(departments => {
      this.departments = departments;
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

  compareFnPosition(c1: PositionModel, c2: PositionModel): boolean {
    return c1 && c2 ? c1.positionId === c2.positionId : c1 === c2;
  }
  compareFnEducation(c1: Education, c2: Education): boolean {
    return c1 && c2 ? c1.educationId === c2.educationId : c1 === c2;
  }
  compareFnDivision(c1: Division, c2: Division): boolean {
    return c1 && c2 ? c1.divisionId === c2.divisionId : c1 === c2;
  }

  ngOnInit(): void {
    this.getEmployee();
    this.activatedRouter.paramMap.subscribe(params=>{
      const id=+params.get("id");
      this.id=id;
      this.employeeService.findById(id).subscribe(employee=>{
        this.currentEmployee=employee;
      })
    })
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      Object.keys(this.employeeForm.controls).forEach(field => {
        const control = this.employeeForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      let employee: Employee = this.employeeForm.value;
      this.employeeService.updateService(this.id,employee).subscribe(response => {

       this.employeeForm.reset(true);
       this.notify()
      });
    }
  }


  getEmployee() {
    this.activatedRouter.paramMap.subscribe(param => {
      const id = +param.get('id');
      this.employeeService.findById(id).subscribe(employee => {
        this.currentEmployee=employee;
        console.log(this.datePipe.transform(employee.employeeBirthday,'MM-dd-yyyy'));
        this.employeeForm = this.fb.group({
          employeeName: [employee.employeeName, [Validators.required, Validators.pattern('')]],
          employeeBirthday: [this.datePipe.transform(employee.employeeBirthday,'yyyy-MM-dd'), [Validators.required, Validators.pattern('')]],
          employeeIdCard: [employee.employeeIdCard, [Validators.required, Validators.pattern('')]],
          employeeSalary: [employee.employeeSalary, [Validators.required, Validators.min(10)]],
          employeePhone: [employee.employeePhone, [Validators.required, Validators.pattern('^(090|091|(\\+84)09)\\d{8}')]],
          employeeEmail: [employee.employeeEmail, [Validators.required, Validators.pattern]],
          employeeAddress: [employee.employeeAddress, Validators.required],
          educationDegree: [employee.educationDegree, Validators.required],
          position: [employee.position, Validators.required],
          division: [employee.division, Validators.required]
        });
      });
    });
  }

  compareObject(a,b){

  }
  resetForm(){
    this.employeeForm.reset(true);
  }

  notify() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Chỉnh sửa thành công!',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
