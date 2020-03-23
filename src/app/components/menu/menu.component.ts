import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-items.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [
    { id: 1, description: 'Home', selected: true},
    { id: 2, description: 'Lista giochi', selected: false},
    { id: 3, description: 'Modifica gioco', selected: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
