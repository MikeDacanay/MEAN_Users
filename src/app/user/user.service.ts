import { User } from "./user";
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
@Injectable()
export class UserService {

  test =  [
    new User(1,"First","Last","email@emaigmas.com"),
    new User(2,"third","Last","email@emaigmas.com"),
    new User(3,"second","Last","email@emaigmas.com")
  ];

  constructor() { }

  create(user: User){

  }

  destroy(user: User){

  }

  update(user: User){

  }

  getUsers(){

  }

  getUser(user: User){
  }
}
