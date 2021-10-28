import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

let header = document.getElementById('control-list');
let list = document.getElementsByClassName('private-btn');


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  controls=[false,false,true,false,false,false,false]
  constructor(private router:Router) {

  }

  ngOnInit(): void {
    // this.router.navigate(['admin',{outlets:{'admin':['home']}}])
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener('click',function(){
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      })
    }
  }
  navigateTo(value) {
    if (value.target.value) {
      console.log(value.target.value);
      this.router.navigateByUrl(value.target.value);
    }
    return false;
  }

  controlTab(number: number) {
    for (let i = 0; i < this.controls.length; i++) {
      if(i==number){
        this.controls[i]=true;
      }else {
        this.controls[i]=false;
      }
    }
  }
}
