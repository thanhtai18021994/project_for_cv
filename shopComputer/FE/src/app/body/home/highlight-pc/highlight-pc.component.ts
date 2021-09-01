import { Component, OnInit } from '@angular/core';
import {ComputerService} from '../../../service/computer.service';

@Component({
  selector: 'app-highlight-pc',
  templateUrl: './highlight-pc.component.html',
  styleUrls: ['./highlight-pc.component.css']
})
export class HighlightPcComponent implements OnInit {

  constructor(private computerService:ComputerService) { }

  ngOnInit(): void {
  }

}
