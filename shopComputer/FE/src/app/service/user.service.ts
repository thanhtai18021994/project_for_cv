import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../model/user.interface';
import {Router} from '@angular/router';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  URL='http://localhost:8080';
  private token=null;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http:HttpClient,
    private router:Router
  ) {}

  public login(username:string,password:string):Observable<any>{
    const payload=new HttpParams().set('username',username).set('password',password);
    console.log(payload);
    return this.http.post<any>(`http://localhost:8080/api/login`,payload,{observe:'response'}).pipe(tap(res=>{
      this.addTokenToCache(res['body']['access_token'],res['body']['refresh_token']);
    }),catchError(err => {
      return of(err);
    }));
  }

  getPrincipal(): Observable<User> {
    return this.http.get<User>(`${this.URL}/api/user/principal`).pipe(map(user=>{
      this.addUserToCache(user);
      return user;
    }));
  }
  update(user:User,id:number):Observable<User>{
    return this.http.put<User>(`${this.URL}/api/user/update/${id}`,user);
  }
  updateUser(formData: FormData): Observable<User> {
    return this.http.post<User>(`${this.URL}/user/update`, formData);
  }

  deleteUser(userName: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}/user/delete/${userName}`);
  }
  addUserToCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUserFromCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  addTokenToCache(token: string, refresh_token) {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refresh_token);
  }
  getTokenFromCache(): string {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.token = null;
    localStorage.removeItem('user');
    this.router.navigate(['client']);
  }


  isLoggedIn(): boolean {
    if (this.getTokenFromCache()) {
      this.getPrincipal().subscribe(data=>{
        this.addUserToCache(data);
      })
      return true;
    } else {
      this.logOut();
      return false;
    }
  }
}
