import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	users: Array<User> = this._userService.test;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  getUsers(){
 	}

}
