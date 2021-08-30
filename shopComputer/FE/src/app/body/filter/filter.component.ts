import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ComputerService} from '../../service/computer.service';
import {Computer} from '../../model/computer';

let elm1=document.getElementsByClassName("category-image");
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categories: Category[];
  isBoolean: Boolean = true;
  numberCurrentProduct: number;
  idSearch: number[] = [];
  @Output('listComputer') listComputer = new EventEmitter<Computer[]>();

  constructor(
              ) {
  }

  ngOnInit(): void {
  }



  changeStatus() {
    if (this.isBoolean === true) {
      this.isBoolean = false;
    } else {
      this.isBoolean = true;
    }
    console.log('hello' + this.isBoolean);
  }



  changeBorder(id:HTMLElement){
   id.setAttribute("style","border-color:blue")
  }


}
