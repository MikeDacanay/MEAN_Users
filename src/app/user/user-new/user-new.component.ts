import { User } from './../user';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
	newUser = new User();

  constructor() { }

  ngOnInit() {
  }

  create(){
  	this.newUser = new User();
		// console.log('hits'); //to test if event emitter links  	
  }

}
