import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = [
    {username: "andrea",password:"123"},
    {username: "davide",password:"123"},
    {username: "marco",password:"123"}
  ]

  controllo : boolean;

  constructor() {}

  accesso(username: string,password:string): boolean{
    this.controllo=false;
    this.users.forEach(element => {
      if(element.username==username && element.password==password){
        this.controllo=true;
      }
    });
    return this.controllo;
  }
}
