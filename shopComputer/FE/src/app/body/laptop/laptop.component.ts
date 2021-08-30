import {Component, OnInit} from '@angular/core';
import {Computer} from '../../model/computer';
import {ComputerService} from '../../service/computer.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  laptops: Computer[];
  computers: Computer[];
  categories: Category[];
  isBoolean: Boolean = true;
  numberCurrentProduct: number;
  idSearch: number[] = [];
  isBooleanPriceTable:boolean=true;
  priceTable:number[]=[];
  constructor(
    private categoryService: CategoryService,
    private computerService: ComputerService
  ) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.getComputer();
  }

  getComputer(){
    this.computerService.findAll().subscribe(computers=>{
      this.laptops=computers.filter(value => {
        return value.typeComputer.id===1;
      })
    })
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }
  onGetListComputer(value: any) {
    this.computers = value;
  }

  changeStatus() {
    if (this.isBoolean === true) {
      this.isBoolean = false;
      this.isBooleanPriceTable=true;
      this.numberCurrentProduct=0;
    } else {
      this.isBoolean = true;
    }
  }

  numberProduct(idCategory: number) {
    let i = 0;
    let check=true;
    do {
      if (this.idSearch[i] === idCategory) {
        check=false;
        break;
      }
      i++;
    } while (i < this.idSearch.length);

    if (check){
      this.idSearch.push(idCategory)
    }else {
      this.idSearch = this.idSearch.filter(value => {
        return value != idCategory;
      });
    }

    this.computerService.searchComputerByCategory(this.idSearch).subscribe(computers=>{
      let laptopList:Computer[]=computers.filter(value => {
        return value.typeComputer.id===1;
      })
      this.numberCurrentProduct=laptopList.length;
    })
  }

  searchCategory() {
    this.changeStatus();
    this.computerService.searchComputerByCategory(this.idSearch).subscribe(computers => {
      this.laptops=computers.filter(value => {
        return value.typeComputer.id===1;
      })
    });
  }

  changeStatusPriceTable(){
    if (this.isBooleanPriceTable==true){
      this.isBoolean=true;
      this.isBooleanPriceTable=false;
      this.numberCurrentProduct=0;
    }else {
      this.isBooleanPriceTable=true;
    }
  }

  searchByPrice(){
    this.computerService.searchByPrice(this.priceTable).subscribe(computers=>{
      this.laptops=computers.filter(value => {
        return value.typeComputer.id===1;
      })
    })
    this.changeStatusPriceTable();
  }

  numberProductByPrice(price:number){
    let j = 0;
    let check=true;
    do {
      if (this.priceTable[j] === price) {
        check=false;
        break;
      }
      j++;
    } while (j < this.priceTable.length);

    if (check){
      this.priceTable.push(price)
    }else {
      this.priceTable = this.priceTable.filter(value => {
        return value != price;
      });
    }

    this.computerService.searchByPrice(this.priceTable).subscribe(computers=>{
      let laptopList:Computer[]=computers.filter(value => {
        return value.typeComputer.id===1;
      })
      this.numberCurrentProduct=laptopList.length;
    })
  }
}
