import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from '../model/computer.interface';
import {Mouse} from '../model/mouse.interface';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  private readonly URL="http://localhost:8080/api/mouse"
  constructor(private http:HttpClient) { }
  public getAll():Observable<Mouse[]>{
    return this.http.get<Mouse[]>(`${this.URL}`);
  }
  public findById(id:number):Observable<Mouse>{
    return this.http.get<Mouse>(`${this.URL}/find/${id}`);
  }
  public create(mouse:Mouse):Observable<void>{
    return this.http.post<void>(`${this.URL}/create`,mouse);
  }
  public update(id:number,mouse:Mouse):Observable<void>{
    return this.http.put<void>(`${this.URL}/update/${id}`,mouse);
  }
  public delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/delete/${id}`);
  }
}
