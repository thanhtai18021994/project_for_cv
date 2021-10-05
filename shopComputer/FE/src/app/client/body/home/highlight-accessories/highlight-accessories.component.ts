import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-accessories',
  templateUrl: './highlight-accessories.component.html',
  styleUrls: ['./highlight-accessories.component.css']
})
export class HighlightAccessoriesComponent implements OnInit {
  highlightList:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
