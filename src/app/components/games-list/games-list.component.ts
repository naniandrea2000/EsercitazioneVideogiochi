import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { GameItem } from 'src/app/models/game-Items.interface';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  gamesList: GameItem[];
  
  @Output()
  selectGameItem : EventEmitter<number> = new EventEmitter();
  
  constructor(private gameListService: GameListService) { 
    this.gamesList= this.gameListService.getGameList();
  }

  ngOnInit(): void {
  }

  selectedComponent(id : number){
    this.selectGameItem.emit(id);
  }

}
