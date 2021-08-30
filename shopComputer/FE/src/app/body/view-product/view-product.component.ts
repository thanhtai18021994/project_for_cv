import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  selected = 0;
  hovered = 0;
  readonly = false;
  constructor() { }

  ngOnInit(): void {
  }

}
