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
  }


  changeStatus(){
    if(!this.status){
      this.status=true;
    }else {
      this.status=false;
    }
  }

  logOut(){
  }
}
