import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from '../model/computer.interface';
import {Keyboard} from '../model/keyboard.interface';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private readonly URL="http://localhost:8080/api/keyboard"
  constructor(private http:HttpClient) { }
  public getAll():Observable<Keyboard[]>{
    return this.http.get<Keyboard[]>(`${this.URL}`);
  }
  public findById(id:number):Observable<Keyboard>{
    return this.http.get<Keyboard>(`${this.URL}/find/${id}`);
  }
  public create(keyboard:Keyboard):Observable<void>{
    return this.http.post<void>(`${this.URL}/create`,keyboard);
  }
  public update(id:number,keyboard:Keyboard):Observable<void>{
    return this.http.put<void>(`${this.URL}/update/${id}`,keyboard);
  }
  public delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/delete/${id}`);
  }
}
