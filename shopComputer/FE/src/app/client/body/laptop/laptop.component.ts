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
  page: any;
  constructor(
    private computerService: ComputerService
  ) {
  }

  ngOnInit(): void {
    this.getProd();
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

  getProd(){
    this.computerService.getAllByPaginate({page:0,size:10}).subscribe(data=>{
      this.listLaptop=data['content'];
      this.page=data;
      console.log(this.listLaptop);
    })
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

  goToPage(number: number) {
    const request={page:number,size:10};
    this.computerService.getAllByPaginate(request).subscribe(data=>{
      this.listLaptop=data['content'];
      this.page=data['size'];
    })
  }
}
