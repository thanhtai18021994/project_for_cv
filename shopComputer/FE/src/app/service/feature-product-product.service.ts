import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {FeatureProductProduct} from '../model/featureProductProduct';
import {HttpClient} from '@angular/common/http';

const URL=environment.url;

@Injectable({
  providedIn: 'root'
})

export class FeatureProductProductService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<FeatureProductProduct[]>{
    return this.http.get<FeatureProductProduct[]>(URL+"/list/composite/key")
  }
}
