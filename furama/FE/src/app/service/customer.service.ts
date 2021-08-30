import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API_URI="http://localhost:8080/api/customer"
  constructor(
    private http:HttpClient
  ) { }

  public getAll():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.API_URI}/get`);
  }

  public getCustomerType():Observable<CustomerType[]>{
    return this.http.get<CustomerType[]>(`http://localhost:8080/api/customerType`);
  }

  public create(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.API_URI}/create`,customer);
  }

  public update(id:number,customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.API_URI}/update/${id}`,customer);
  }

  public findById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.API_URI}/find/${id}`)
  }
  public delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.API_URI}/delete/${id}`);
  }

  findAllField(name:string, phone:string,fromAge:string,toAge:string,customerType:string):Observable<Customer[]> {
    const requests = `name/${name}/phone/${phone}/age1/${fromAge}/age2/${toAge}/customerTypeId/${customerType}`;
    return this.http.get<Customer[]>(`${this.API_URI}/search/${requests}`)
  }
}
