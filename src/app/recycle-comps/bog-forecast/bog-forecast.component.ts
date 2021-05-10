import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bog-forecast',
  templateUrl: './bog-forecast.component.html',
  styleUrls: ['./bog-forecast.component.css']
})
export class BogForecastComponent implements OnInit {
  @Input() nextBogForecasts:any;

  constructor() {
   }

  ngOnInit() {
    console.log(this.nextBogForecasts)
  }

}
