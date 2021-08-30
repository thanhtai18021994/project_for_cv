import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../service/security/user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  role: string[] = [];
  constructor(private userService:UserService,
              private router:Router) {
    if (this.userService.getUserFromCache().roles) {
      let roles = this.userService.getUserFromCache().roles;
      for (let i = 0; i < roles.length; i++) {
        this.role.push(roles[i].name.substring(5));
      }
    }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.userService.isLoggedIn() &&(this.role.indexOf('ADMIN') >= 0)) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
