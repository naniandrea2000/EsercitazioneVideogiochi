import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from '../models/game-Items.interface';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/games');
  }

  getGamesGenere(author: number): Observable<HttpResponse<GameItem[]>> {
    let genere: string=""+author;
    let params: HttpParams;
    if (genere != null) {
      params = new HttpParams().set('genere', genere);
    }
    return this.httpClient.get<GameItem[]>('http://localhost:3000/games', { observe: 'response', params: params });
    //return this.httpClient.get<GameItem[]>('http://localhost:3000/games?genere=' + genere);
  }


}
