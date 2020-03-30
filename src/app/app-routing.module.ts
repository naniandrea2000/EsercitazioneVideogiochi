import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
//import { GameItemComponent } from './components/game-item/game-item.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: GamesListComponent},
  {path: 'edit', component: EditGameComponent},
  {path: 'detail/:id', component: GameDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
 
@core.NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingGame { }