import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../service/security/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardGuard implements CanActivate {
  role: string[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    if (this.userService.getUserFromCache().roles) {
      let roles = this.userService.getUserFromCache().roles;
      console.log(roles);
      for (let i = 0; i < roles.length; i++) {
        this.role.push(roles[i].name.substring(5));
      }
      console.log(this.role);
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(this.role.indexOf('ADMIN'));
    console.log(this.role);
    console.log(this.userService.isLoggedIn());
    if (this.userService.isLoggedIn() &&(this.role.indexOf('ADMIN') >= 0)) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
