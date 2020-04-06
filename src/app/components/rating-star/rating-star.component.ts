import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue:number;

  constructor() { }

  ngOnInit(): void {
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
