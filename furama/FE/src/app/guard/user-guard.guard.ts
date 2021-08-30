import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../service/security/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(
    private router:Router,
    private userService:UserService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let token=localStorage.getItem("token");
    if (this.userService.isLoggedIn()){
      return true;
    }else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
