import { Component, OnInit } from '@angular/core';
import { InboxService } from 'src/app/service/inbox.service';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css']
})
export class ChatformComponent implements OnInit {
  msg: string;

  constructor(
    private auth:InboxService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  sendMessage(){

    this.afAuth.authState.subscribe(auth=>{
      console.log(auth);
      const roomname='room_'+auth.displayName;
      this.auth.sendMessage(this.msg,roomname);
      this.msg='';
    })
  }

  handleKeyDow(event) {
    if (event.keyCode===13){
      this.sendMessage();
    }
  }

}
