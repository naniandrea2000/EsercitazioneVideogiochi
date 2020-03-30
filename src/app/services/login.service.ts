import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = [
    {username: "andrea",password:"123",admin:true},
    {username: "davide",password:"123",admin:false},
    {username: "marco",password:"123",admin:false}
  ]

  constructor(private router:Router) {}

  accesso(username: string,password:string): boolean{
    let controllo=false;
    this.users.forEach(element => {
      if(element.username==username && element.password==password){
        if(element.admin){
          sessionStorage.setItem('privilege', 'admin');
        }
        else sessionStorage.setItem('privilege', 'user');
        controllo=true;
      }
    });
    return controllo;
  }

  eseguiLogin(username: string,password:string){
    if (this.accesso(username,password)) {
      sessionStorage.setItem('user', username);
      this.router.navigateByUrl('/home');
    }
  }
}
