import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayNow: string = 'none';
  flidFront: boolean = true;
  flidBack: boolean = false;
  submbit: any;

  constructor() {}

  ngOnInit(): void {}

  openProfile() {
    if (this.displayNow === 'none') {
      this.displayNow = 'block';
    } else {
      this.displayNow = 'none';
    }
  }

  flidCard() {
    console.log('true');
    if (this.flidFront) {
      this.flidBack = true;
      this.flidFront = false;
    } else {
      this.flidBack = false;
      this.flidFront = true;
    }
  }
}
