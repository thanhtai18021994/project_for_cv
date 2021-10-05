import {Component, OnInit} from '@angular/core';
import {Computer} from '../../../model/computer.interface';
import {ComputerService} from '../../../service/computer.service';
import {Manufacture} from '../../../model/manufacture.interface';


@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  listLaptop: Computer[];
  listPc: Computer[];
  manufactures:Manufacture[];
  isBoolean: Boolean = true;
  numberCurrentProduct: number;
  idSearch: number[] = [];
  isBooleanPriceTable:boolean=true;
  priceTable:number[]=[];
  constructor(
    private computerService: ComputerService
  ) {
  }

  ngOnInit(): void {
    this.getComputer();
    this.computerService.getAll()
  }

  getComputer(){
    this.computerService.getAll().subscribe(computers=>{
      this.listLaptop=computers.filter(value => {
        return value.pcs.pcsId===1;
      })
      this.listPc=computers.filter(value => {
        return value.pcs.pcsId===2;
      })
    })
  }

  onGetListComputer(value: any) {
    this.listPc = value;
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


  changeStatusPriceTable(){
    if (this.isBooleanPriceTable==true){
      this.isBoolean=true;
      this.isBooleanPriceTable=false;
      this.numberCurrentProduct=0;
    }else {
      this.isBooleanPriceTable=true;
    }
  }
}
