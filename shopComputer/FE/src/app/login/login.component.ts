import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:number=0;
  loggedIn: boolean;
  constructor(
    private router:Router
  ) {
    const observerble=new Observable(function(observer){
      observer.next()
    })
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){
    if(localStorage.getItem('user')!=='null'){
      this.router.navigateByUrl('/client/(client:view)')
    }
  }

  onLogin(email:string,password:string){
    let user={
      email:email,
      password:password
    }
    if(email==='admin'&&password==='1234'){
      localStorage.setItem('user',JSON.stringify(user));
      this.router.navigateByUrl('/client/(client:view)')
    }else {
      this.error=-1;
    }
  }

}
