import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-gradiweb';
  weatherBogota:any;
  cityNameBogota:string="BR-RJ";
  constructor(private weatherService:WeatherService){
   this.weatherBogota=this.weatherService.getWeatherOfCity(this.cityNameBogota);   
  }


}
