import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

signUpButton = document.getElementById('signUp');
signInButton = document.getElementById('signIn');
container = document.getElementById('container');

constructor() { }

signUp(){
    this.container.classList.add("right-panel-active");
}

signIn(){
  this.container.classList.remove("right-panel-active");
}

// this.signInButton.addEventListener('click', () => {
// 	
// });

ngOnInit(): void {
}

}
