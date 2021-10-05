import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit,OnChanges {
  @Input() currentPage: any;
  str:any="hello";
  constructor() { }

  ngOnInit(): void {
    console.log('ocntent');
    console.log(this.str.content);
  }
  counter(i = 1) {
    return new Array(i);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.counter(this.currentPage));
  }
}
