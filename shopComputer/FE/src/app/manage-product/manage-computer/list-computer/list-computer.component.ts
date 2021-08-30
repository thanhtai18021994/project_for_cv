import { Component, OnInit } from '@angular/core';
import {ComputerService} from '../../../service/computer.service';
import {Computer} from '../../../model/computer';

@Component({
  selector: 'app-list-computer',
  templateUrl: './list-computer.component.html',
  styleUrls: ['./list-computer.component.css']
})
export class ListComputerComponent implements OnInit {
  computerList:Computer[];
  constructor(private productService: ComputerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.findAll().subscribe(computers=>{
      console.log(computers);
      this.computerList=computers;
    })
  }
}
