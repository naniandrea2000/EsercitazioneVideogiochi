import { Injectable } from '@angular/core';
import { GameItem } from 'src/app/models/game-Items.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  
  private gamesListStored: GameItem[] = [
    {id: 1,nome: "Peggle", descrizione: "colpire il maggior numero di palline lanciando una palla dall'alto dello schermo",genere: 2,rating: 10,prezzo: 5, annoUscita: new Date()},
    {id: 2,nome: "Fifa 20", descrizione: "Gioco di calcio online e offline",genere:2,rating: 4,prezzo: 55, annoUscita: new Date()},
    {id: 3,nome: "Rainbow six siege", descrizione: "Gioco strategico multiplayer",genere: 1,rating: 9,prezzo: 40, annoUscita: new Date()}
  ]
 
  constructor() { }

  getGameList(): GameItem[]{
    return this.gamesListStored;
  }

  getGameItem(id: number): GameItem{
    return this.gamesListStored.find(item =>{
      return item.id===id;
    });
  }
}
