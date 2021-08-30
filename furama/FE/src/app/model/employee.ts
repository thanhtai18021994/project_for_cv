import {Education} from './education';
import {Division} from './division';
import {PositionModel} from './PositionModel';

export interface Employee {
  employeeId:number;
  codeEmployee: string;
  employeeName: string;
  employeeGender:string;
  employeeBirthday: string;
  employeeIdCard: string;
  employeeSalary: number;
  employeePhone: string;
  employeeEmail:string;
  employeeAddress:string;
  educationDegree: Education;
  position: PositionModel;
  division: Division;
}
