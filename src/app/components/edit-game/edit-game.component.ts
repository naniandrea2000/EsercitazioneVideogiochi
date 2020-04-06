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

  game: GameItem;
  gameForm: FormGroup
  
  constructor(private gameListService: GameListService,private fb: FormBuilder) { 
    this.gameForm = this.fb.group({
      id: '',
      name: '',
      descrizione:'',
      genere:'',
      rating:'',
      prezzo:'',
      annoUscita:'',
    });
  }

  ngOnInit(): void {
  }

  form(id : number){
    this.game=this.gameListService.getGameItem(id);
    
  }
}
