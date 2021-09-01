import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  public findById(id:number):Observable<Computer>{
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
}
