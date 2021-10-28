import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  displayFlat: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  controlInbox() {
    this.displayFlat=!this.displayFlat;
  }

  closeBox(e: boolean) {
    this.displayFlat=e;
  }
}
