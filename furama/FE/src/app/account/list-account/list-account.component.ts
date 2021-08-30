import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/security/user.service';
import {AccountService} from '../../service/account.service';
import {User} from '../../model/user';
import {templateJitUrl} from '@angular/compiler';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  users:User[];
  p: string | number;
  constructor(private userService:AccountService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
      for (let i = 0; i < this.users.length; i++) {
        this.users[i].imageAvatarOfUser=`data:image/png;base64,${this.users[i].imageAvatarOfUser}`;
      }
    })
  }

  getUser() {

  }

  searchAllField(value: string) {

  }
}
