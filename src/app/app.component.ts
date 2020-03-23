import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentToShow: number=1;
  selezionato: number;

  dettaglio(id : number){
    this.componentToShow=4;
  }
}
