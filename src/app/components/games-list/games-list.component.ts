import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/models/game-Items.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  gamesList: GameItem[] = [
    {id: 1,nome: "Peggle", descrizione: "colpire il maggior numero di palline lanciando una palla dall'alto dello schermo",genere:"Videogioco rompicapo",rating: 10,prezzo: 5, annoUscita: new Date()},
    {id: 2,nome: "Fifa 20", descrizione: "Gioco di calcio online e offline",genere:"calcio",rating: 4,prezzo: 55, annoUscita: new Date()},
    {id: 3,nome: "Rainbow six siege", descrizione: "Gioco strategico multiplayer",genere:"Gioco strategico sparatutto",rating: 9,prezzo: 40, annoUscita: new Date()}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
