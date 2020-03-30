import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private listaUtenti: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  /*login(username: string, password: string) {
    if (this.listaUtenti.accesso(username,password)) {
      this.router.navigateByUrl('/home');
    }
  }*/
  login(username: string, password: string){
    sessionStorage.setItem('user', username);
    sessionStorage.setItem('password', password);
 
    username=sessionStorage.getItem('user');
    password=sessionStorage.getItem('password');
 
    if(this.listaUtenti.accesso(username,password)){
      this.router.navigateByUrl("/home");
    }
  }
}
