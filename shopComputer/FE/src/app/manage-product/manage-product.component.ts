import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

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
