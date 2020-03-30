import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-items.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectMenuItem : EventEmitter<number> = new EventEmitter();

  menuList: MenuItem[] = [
    { id: 1, description: 'Home', selected: true},
    { id: 2, description: 'Lista giochi', selected: false},
    { id: 3, description: 'Modifica gioco', selected: false}
  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  utente=sessionStorage.getItem('user');

  selectedComponent(id : number){
    for(let menuItem of this.menuList){
      menuItem.selected = id === menuItem.id;
    }
    this.selectMenuItem.emit(id);
  }
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }

  admin(){
  if(sessionStorage.getItem('privilege')=='admin'){
    return true;
  }
  else 
    return false;
  }
  
}
