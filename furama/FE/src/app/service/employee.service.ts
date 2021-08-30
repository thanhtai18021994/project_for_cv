import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {environment} from '../../environments/environment';
import {filter, map} from 'rxjs/operators';
import {PositionModel} from '../model/PositionModel';
import {Education} from '../model/education';
import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly URI_API = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.URI_API}/employee/get`);
  }



  searchName(name:string):Observable<Employee[]>{
    // console.log(111111);
    return this.http.get<Employee[]>(`${this.URI_API}/employee?name_like=${name}`);
  }

  searchPhone(phone:string):Observable<Employee[]>{
    console.log("abc");
    return this.http.get<Employee[]>(`${this.URI_API}/employee?phoneNumber_like=${phone}`);
  }

  createForm(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.post<Employee>(`${this.URI_API}/employee/create`, employee);
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.URI_API}/employee/` + id);
  }

  delete(id: number) :Observable<Employee>{
    return this.http.delete<Employee>(`${this.URI_API}/employee/${id}`);
  }

  updateService(id:number,employee:Employee):Observable<Employee>{
    console.log(employee);
    return this.http.put<Employee>(`${this.URI_API}/employee/update/${id}`,employee);
  }

  search(name:string,phone:string,position:string,education:string,department:string):Observable<Employee[]>{
    let request=`name/${name}/phone/${phone}/position/${position}/education/${education}/division/${department}`;
    return this.http.get<Employee[]>(`${this.URI_API}/employee/search/${request}`);
  }
}
