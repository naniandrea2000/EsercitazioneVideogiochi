import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { LoginComponent } from './components/login/login.component';
import { MyRouteGuardService } from './services/my-route-gards.service';
import { EditRouteGards } from './services/edit-route-gards.service';
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [MyRouteGuardService]},
  {path: 'list', component: GamesListComponent, canActivate: [MyRouteGuardService]},
  {path: 'edit', component: EditGameComponent, canActivate: [EditRouteGards]},
  {path: 'detail/:id', component: GameDetailComponent, canActivate: [MyRouteGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SignInComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
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