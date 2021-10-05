import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateTo(value) {
    if (value.target.value) {
      console.log(value.target.value);
      this.router.navigateByUrl(value.target.value);
    }
    return false;
  }
}
