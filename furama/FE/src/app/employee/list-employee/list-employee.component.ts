import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {PositionModel} from '../../model/PositionModel';
import Swal from 'sweetalert2';
import { Division} from '../../model/division';
import {Education} from '../../model/education';
import {EducationService} from '../../service/education.service';
import {DepartmentService} from '../../service/department.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees!: Employee[];
  p: number = 1;
  departments: Division[];
  positions: PositionModel[];
  educations: Education[];

  constructor(
    private employeeService: EmployeeService,
    private educationService: EducationService,
    private departmentService: DepartmentService,
    private positionService: PositionService
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
    this.employeeService.getEmployees().subscribe(responsive => {
      console.log(responsive);
      this.employees = responsive;
      console.log(this.employees);
    });
  }

  ngOnInit(): void {

  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(responsive => {
      this.employees = responsive;
    });
  }



  searchAllField(value: string) {
    console.log(value);
    this.employeeService.searchName(value).subscribe(employeesByName => {
      this.employees=employeesByName;
    });
    this.employeeService.searchPhone(value).subscribe(employeesByPhone=>{
      this.employees=this.employees.concat(employeesByPhone);
    })
  }

  delete(id: number) {
    this.getAgree(id);
  }

  agreeDelete(id:number) {
    this.employeeService.delete(id).subscribe((employee) => {
      this.getEmployees();
    });
  }

  getAgree(id:number) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      denyButtonText: `Không xóa`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.agreeDelete(id);
        Swal.fire('Đã Xóa!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Vậy thì đừng bấm dm!', '', 'info');
      }
    });
  }

  flag:boolean=false;

  controlModal(){
    if (!this.flag){
      this.flag=true
    }else {
      this.flag=false;
    }
  }

  search(name: string, phone: string, position: string, education: string, department: string){
    this.controlModal();
    if (phone==""){
      phone=null;
    }
    if (name==''){
      name=null
    }
    this.employeeService.search(name,phone,position,education,department).subscribe(employee=>{
      this.employees=employee;
    })
  }
}
