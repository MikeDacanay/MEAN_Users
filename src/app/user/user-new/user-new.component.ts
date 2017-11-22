import { User } from './../user';
import { Component, OnInit} from '@angular/core';
import { UserService } from './../user.service'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
	newUser = new User();

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  create(){
    this._userService.create(this.newUser);
  	this.newUser = new User();
		// console.log('hits'); //to test if event emitter links  	
  }

}
