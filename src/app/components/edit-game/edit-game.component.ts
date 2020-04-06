import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenereListService } from 'src/app/services/genere-list.service';
import { GameListService } from 'src/app/services/game-list.service';
import { GameItem } from 'src/app/models/game-Items.interface';
import { FormGroup, FormBuilder,FormArray,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

  attivato:boolean;
  gameList:GameItem[];
  game: GameItem;
  gameForm: FormGroup
  
  constructor(private gameListService: GameListService,private fb: FormBuilder) { 
    this.gameList=gameListService.getGameList();
    this.gameForm = this.fb.group({
      id:'',
      nome: '',
      descrizione:'',
      genere:'',
      rating:'',
      prezzo:'',
      annoUscita:'',
    });
  }

  ngOnInit(): void {
    this.attivato=false;
  }

  form(id : number){
    this.game=this.gameListService.getGameItem(id);
    console.log(this.gameListService.getGameItem(id));
    this.modifica(this.game);
    this.attivato=true;
  }
  
  modifica(gioco:GameItem){
    this.gameForm = this.fb.group({
      id: gioco.id,
      nome: gioco.nome,
      descrizione: gioco.descrizione,
      genere: gioco.genere,
      rating: gioco.rating,
      prezzo: gioco.prezzo,
      annoUscita: gioco.annoUscita,
    });
  }
  onSubmit(form){
    this.gameListService.modifica(form);
    this.gameList=this.gameListService.getGameList();
    this.attivato=false;
  }
}
