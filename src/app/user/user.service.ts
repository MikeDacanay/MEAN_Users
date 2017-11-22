import { User } from "./user";
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
@Injectable()
export class UserService {

  constructor() { }

  create(user: User){
    // console.log(user); //to check if it hits user.service
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
