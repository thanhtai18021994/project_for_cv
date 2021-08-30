import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly URL="http://localhost:8080/api"
  constructor(private http:HttpClient) {}

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}/user`);
  }

  public updateUser(id:number,user:User):Observable<User>{
    return this.http.put<User>(`${this.URL}/user/update/${id}`,user);
  }

  public findById(id:number):Observable<User>{
    return this.http.get<User>(`${this.URL}/user/find/${id}`);
  }
}
