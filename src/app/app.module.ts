import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GamesListComponent,
    GameDetailComponent,
    GameItemComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
