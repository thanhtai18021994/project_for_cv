import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string='';
  status:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(){
    if(localStorage.getItem('user')!=='null'){
      this.userName=JSON.parse(localStorage.getItem('user')).email;
    }
    console.log(this.userName);
  }

  changeStatus(){
    if(!this.status){
      this.status=true;
    }else {
      this.status=false;
    }
  }

  logOut(){

    if (localStorage.getItem('user')){
      localStorage.setItem('user',null)
    }
    console.log(this.userName);
    this.userName='';
    this.changeStatus();
  }
}
