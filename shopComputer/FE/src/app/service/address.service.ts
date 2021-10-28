import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Province} from '../model/province.interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) {}
  public getProvinces():Observable<Province[]>{
    return this.http.get<Province[]>(`https://provinces.open-api.vn/api/?depth=3`)
  }
}
