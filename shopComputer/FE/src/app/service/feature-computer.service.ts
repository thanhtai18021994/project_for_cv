import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeatureComputer} from '../model/featureComputer';

const URL=environment.url;
@Injectable({
  providedIn: 'root'
})
export class FeatureComputerService {

  constructor(private http:HttpClient) { }
  getAll():Observable<FeatureComputer[]>{
    return this.http.get<FeatureComputer[]>(URL+"/list/feature-computer")
  }
}
