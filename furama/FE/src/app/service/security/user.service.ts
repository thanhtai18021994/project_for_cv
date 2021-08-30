import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';


// const helper = new JwtHelperService();

// const decodedToken = helper.decodeToken(myRawToken);
// const expirationDate = helper.getTokenExpirationDate(myRawToken);
// const isExpired = helper.isTokenExpired(myRawToken);

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public uriApi = 'http://localhost:8080';
  token: string = null;

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService,
              private router:Router) {
  }

  login(user: User): Observable<HttpResponse<User>> {

    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
    };
    const payload = new HttpParams()
      .set('username', user.email)
      .set('password', user.password);

    return this.http.post<User>
    (`${this.uriApi}/api/login`, payload, {observe: 'response'});
  }

  getPrincipal(): Observable<User> {
    return this.http.get<User>(`${this.uriApi}/api/user/principal`);
  }

  updateUser(formData: FormData): Observable<User> {
    return this.http.post<User>(`${this.uriApi}/user/update`, formData);
  }

  deleteUser(userName: string): Observable<any> {
    return this.http.delete<any>(`${this.uriApi}/user/delete/${userName}`);
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

  getRefreshToken():string{
    return localStorage.getItem('refresh_token');
  }
  logOut() {
    console.log("log out");
    localStorage.removeItem('token');
    this.token = null;
    localStorage.removeItem('user');
    this.router.navigateByUrl("");
  }

  getTokenExpirationDate(): Date | null {
    return this.jwtHelper.getTokenExpirationDate(this.getTokenFromCache());
  }

  isLoggedIn(): boolean {
    if (this.getTokenFromCache() &&
      (!this.jwtHelper.isTokenExpired(this.getTokenFromCache()))||!this.jwtHelper.isTokenExpired(this.getRefreshToken())) {
      this.getPrincipal().subscribe(data=>{
        this.addUserToCache(data);
      })
      return true;
    } else {
      this.logOut();
      return false;
    }
  }


  refreshToken() {
    return this.http.get<any>(`${this.uriApi}/api/token/refresh`);
  }
}
