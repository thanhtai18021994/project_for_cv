import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Computer} from '../model/computer';
import {Observable} from 'rxjs';
import {ComputerDto} from '../model/computerDto';

const URL=environment.url;
const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ComputerService {
  constructor(private http: HttpClient) { }
  public findAll():Observable<Computer[]>{
    return this.http.get<Computer[]>(URL+"/listComputer")
  }

  createComputer(computer:ComputerDto):Observable<Computer>{
    console.log("hello");
    return  this.http.post<Computer>(URL,computer,httpOptions);
  }

  searchLaptop(id:number):Observable<Computer[]>{
    return this.http.get<Computer[]>(URL+"/product/search/"+id);
  }

  searchComputerByCategory(ids:number[]):Observable<Computer[]>{
    if (ids.length===0){
      return this.http.get<Computer[]>(URL+"/product/list-empty")
    }
    return this.http.get<Computer[]>(URL+"/product/search-category/"+ids);
  }
  searchByPrice(prices:number[]):Observable<Computer[]>{
    return this.http.get<Computer[]>(URL+"/product/price/"+prices);
  }
}
