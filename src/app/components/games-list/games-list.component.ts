import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { GameItem } from 'src/app/models/game-Items.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { Router } from '@angular/router';
import { GenereItem } from 'src/app/models/genere.interface';
import { GenereListService } from 'src/app/services/genere-list.service';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  listaGeneri : GenereItem[];
  gamesList: GameItem[];
  
  /*@Output()
  selectGameItem : EventEmitter<number> = new EventEmitter();*/
  
  constructor(private gameListService: GameListService,private genereListService: GenereListService, private router:Router,private myHttpService: MyHttpService) { 
    this.gamesList= this.gameListService.getGameList();
    this.listaGeneri= this.genereListService.getGeneriList();
  }

  selectedComponent(id : number){
    //this.selectGameItem.emit(id);
    this.router.navigate(['/detail',id])
  }

  filtra(genere : number){
    /*if(Number(genere)==0){
      this.gamesList=this.gameListService.getGameList();
    }
    else{
      this.gamesList=this.gameListService.getGameGenere(Number(genere));
    } */
    if(genere==0){
      this.retriveGames();
    } 
    else{
      this.retriveFiltra(genere);
    }
  }

  retriveGames(){
    this.myHttpService.getGames().subscribe(reponse => {
      this.gamesList = reponse;
    }, err => {
      console.log('error');
    });
  }

  retriveFiltra(genere:number){
    this.myHttpService.getGamesGenere(genere).subscribe(reponse => {
      this.gamesList = reponse.body;
    }, err => {
      console.log('error');
    });
  }
  ngOnInit(): void {
    this.retriveGames();
  }

}
