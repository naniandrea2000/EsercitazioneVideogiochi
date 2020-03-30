import { Injectable } from '@angular/core';
import { GenereItem } from '../models/genere.interface';

@Injectable({
  providedIn: 'root'
})
export class GenereListService {

  private generiListStored: GenereItem[] = [
    {id: 1,descrizione:"sparatutto"},
    {id: 2,descrizione:"strategia"},
  ]

  constructor() { }

  getGeneriList(): GenereItem[]{
    return this.generiListStored;
  }
}
