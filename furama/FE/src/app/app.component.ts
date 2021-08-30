import {Component, OnInit} from '@angular/core';
import {UserService} from './service/security/user.service';
import {init} from 'protractor/built/launcher';
import {Router} from '@angular/router';
import {User} from './model/user';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nameUser:string;
  role:string[]=[];
  userGroup:FormGroup;
  isDisplayLogin:boolean=false;
  isLogin:boolean=false;
  constructor(
    private userService:UserService,
    private router:Router,
    private fb: FormBuilder
  ) {

  }

  logout(){
    this.userService.logOut();
    window.location.reload();
  }

  ngOnInit(): void {
    this.getLogin();
    if (this.userService.isLoggedIn()){
      this.nameUser=this.userService.getUserFromCache().fullName;
      let roles=this.userService.getUserFromCache().roles;
      for (let i = 0; i < roles.length; i++) {
        this.role.push(roles[i].name.substring(5));
      }
      this.isLogin=true;
    }

  }
  getLogin() {
    this.userGroup = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    let user: User = this.userGroup.value;
    this.userService.login(user).subscribe(
      (response) => {
        let json = JSON.stringify(response.body);
        let resJson = JSON.parse(json);
        this.userService.addTokenToCache(resJson.access_token, resJson.refresh_token);
        this.controlLogin();
        this.ngOnInit();
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

  controlLogin() {
    if (this.isDisplayLogin){
      this.isDisplayLogin=false;
    }else {
      this.isDisplayLogin=true;
    }
  }
}
