import { Injectable } from '@angular/core';
import { GameItem } from 'src/app/models/game-Items.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  
  private gamesListStored: GameItem[] = [
    {id: 1,nome: "Peggle", descrizione: "colpire il maggior numero di palline lanciando una palla dall'alto dello schermo",genere: 2,rating: 1,prezzo: 5, annoUscita: new Date()},
    {id: 2,nome: "Fifa 20", descrizione: "Gioco di calcio online e offline",genere: 2,rating: 1,prezzo: 55, annoUscita: new Date()},
    {id: 3,nome: "Rainbow six siege", descrizione: "Gioco strategico multiplayer",genere: 1,rating: 1,prezzo: 40, annoUscita: new Date()}
  ]
 
  constructor() { }

  getGameList(): GameItem[]{
    return this.gamesListStored;
  }

  getGameItem(id: number){
    return this.gamesListStored.find(item =>{
      return item.id==id;
    });
  }

  getGameGenere(genere: number){
    return this.gamesListStored.filter(item =>{
      return item.genere===genere;
    });
  }

  modifica(gioco){
    this.gamesListStored.forEach(element => {
      if(element.id===gioco.id){
        element.nome=gioco.nome;
        element.genere=gioco.genere;
        element.descrizione=gioco.descrizione;
        element.prezzo=gioco.prezzo;
        element.rating=gioco.rating;
      }
    });
  }
}
