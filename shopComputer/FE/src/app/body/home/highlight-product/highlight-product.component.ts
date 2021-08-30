import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-product',
  templateUrl: './highlight-product.component.html',
  styleUrls: ['./highlight-product.component.css']
})
export class HighlightProductComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {
  }

  ngOnInit() {
  }
}
