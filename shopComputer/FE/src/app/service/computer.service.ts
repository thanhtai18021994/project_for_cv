import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from '../model/computer.interface';
import {Manufacture} from '../model/manufacture.interface';
import {TypeComputer} from '../model/typeComputer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private readonly URL="http://localhost:8080/api/computer"
  constructor(private http:HttpClient) { }
  public getAll():Observable<Computer[]>{
    return this.http.get<Computer[]>(`${this.URL}`);
  }
  public getAllByPaginate(request):Observable<Computer[]>{
    const params=request;
    return this.http.get<Computer[]>(`${this.URL}/product`,{params});
  }

  public checkIdExist(id:string):Observable<boolean>{
    return this.http.get<boolean>(`${this.URL}/checkId?id=${id}`);
  }
  public findById(id:number):Observable<Computer>{
    console.log(id);
    return this.http.get<Computer>(`${this.URL}/find/${id}`);
  }
  public create(computer:Computer):Observable<void>{
    return this.http.post<void>(`${this.URL}/create`,computer);
  }
  public update(id:number,computer:Computer):Observable<void>{
    return this.http.put<void>(`${this.URL}/update/${id}`,computer);
  }
  public delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/delete/${id}`);
  }
  public findByName(name:string,request):Observable<Computer[]>{
    const params=request;
    return this.http.get<Computer[]>(`${this.URL}/findByName?name=${name}`,{params})
  }
  public findByManufacture(value:number,params):Observable<Computer[]>{
    return this.http.get<Computer[]>(`${this.URL}/findByManufacture?id=${value}`,{params})
  }
  findByTypeComputer(value:number,params):Observable<Computer[]>{
    return this.http.get<Computer[]>(`${this.URL}/findByTypeComputer?id=${value}`,{params})
  }
}
