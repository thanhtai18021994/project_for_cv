import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from '../model/computer.interface';
import {Monitor} from '../model/monitor.interface';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private readonly URL="http://localhost:8080/api/monitor"
  constructor(private http:HttpClient) { }
  public getAll():Observable<Monitor[]>{
    return this.http.get<Monitor[]>(`${this.URL}`);
  }
  public findById(id:number):Observable<Monitor>{
    return this.http.get<Monitor>(`${this.URL}/find/${id}`);
  }
  public create(monitor:Monitor):Observable<void>{
    return this.http.post<void>(`${this.URL}/create`,monitor);
  }
  public update(id:number,monitor:Monitor):Observable<void>{
    return this.http.put<void>(`${this.URL}/update/${id}`,monitor);
  }
  public delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/delete/${id}`);
  }
}
