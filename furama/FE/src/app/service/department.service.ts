import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private readonly URI_API="http://localhost:8080/api/division";
  constructor(
    private http:HttpClient) { }

  findAll():Observable<Division[]>{
    return this.http.get<Division[]>(`${this.URI_API}`);
  }
}
