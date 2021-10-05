import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from '../model/computer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private readonly URL="http://localhost:8080/api/computer"
  constructor(private http:HttpClient) { }
  public getAll():Observable<Computer[]>{
    return this.http.get<Computer[]>(`${this.URL}`);
  }
  public getAllByPaginate(page:number,size:number):Observable<Computer[]>{
    return this.http.get<Computer[]>(`${this.URL}?page=${page}&size=${size}`);
  }
  public findById(id:number):Observable<Computer>{
    return this.http.get<Computer>(`${this.URL}/find/${id}`);
  }
  public create(computer:Computer):Observable<void>{
    // let httpOptions = {
    //   headers: new HttpHeaders({'Content-Type': ' application/json; charset=utf-8'}),
    // };
    return this.http.post<void>(`${this.URL}/create`,computer);
  }
  public update(id:number,computer:Computer):Observable<void>{
    return this.http.put<void>(`${this.URL}/update/${id}`,computer);
  }
  public delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/delete/${id}`);
  }
}
