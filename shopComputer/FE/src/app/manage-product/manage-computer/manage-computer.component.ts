import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-computer',
  templateUrl: './manage-computer.component.html',
  styleUrls: ['./manage-computer.component.css']
})
export class ManageComputerComponent implements OnInit {

  constructor(private router: Router) {

}

  ngOnInit(): void {
  }

}
