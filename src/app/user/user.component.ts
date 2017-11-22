import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	users: Array<User> = [
    new User(1,"First","Last","email@emaigmas.com"),
    new User(2,"third","Last","email@emaigmas.com"),
    new User(3,"second","Last","email@emaigmas.com")
  ];

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  getUsers(){
 	}

}
