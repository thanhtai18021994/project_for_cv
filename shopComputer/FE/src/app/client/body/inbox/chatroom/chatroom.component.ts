import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InboxService} from '../../../../service/inbox.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  @ViewChild('scroll') scrollView:ElementRef;

  // flat:boolean=false;
  constructor(
    private auth:InboxService
  ) { }

  ngOnInit(): void {
  }

  scrollBottom() {
    this.scrollView.nativeElement.scrollTop
      = this.scrollView.nativeElement.scrollHeight;
  }

  ngAfterViewChecked(): void {
    this.scrollBottom();
  }

}
