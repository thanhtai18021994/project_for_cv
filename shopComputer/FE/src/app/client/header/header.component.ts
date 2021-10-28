import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {CartService} from '../../service/cart.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: string = '';
  status: boolean = false;
  isLogin = false;
  isSignUp = false;
  loginForm: FormGroup;
  isSignIn = false;
  numberProduct: number;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.userService.isLoggedIn()){
      console.log("logged");
      this.getPrincipal()
    }
    this.cartService.getCart().subscribe(data => {
      if (data.length>0) {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        this.numberProduct = data.map(item => item.count).reduce(reducer);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      console.log(this.loginForm.get('username').value);
      this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(data => {
        this.loginForm.reset(true);
        this.userService.getPrincipal().subscribe(() => {
          this.ngOnInit();
        });
        this.controlLogin();
      });
    }
  }

  getPrincipal() {
    this.isSignIn = true;
    if (this.userService.getUserFromCache()) {
      console.log(this.userService.getUserFromCache());
      this.userName = this.userService.getUserFromCache().fullName;
    }
  }

  changeStatus() {
    if (!this.status) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  controlLogin() {
    this.isLogin = !this.isLogin;
  }

  logOut() {
    this.userService.logOut();
    this.isSignIn = false;
    this.numberProduct = undefined;
  }

  controlSignUp() {
  }

  ngOnDestroy(): void {
  }

  goToCart() {

  }
}
