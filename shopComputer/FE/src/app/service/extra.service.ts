import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeComputer} from '../model/typeComputer.interface';
import {Manufacture} from '../model/manufacture.interface';
import {Pcs} from '../model/pcs.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {
  private readonly URL="http://localhost:8080";
  constructor(private http:HttpClient) {
  }
  public getTypeComputer():Observable<TypeComputer[]>{
    return this.http.get<TypeComputer[]>(`${this.URL}/api/typeComputer`);
  }
  public getManufacture():Observable<Manufacture[]>{
    return this.http.get<Manufacture[]>(`${this.URL}/api/manufacture`);
  }
  public getPcs():Observable<Pcs[]>{
    return this.http.get<Pcs[]>(`${this.URL}/api/pcs`);
  }
}
