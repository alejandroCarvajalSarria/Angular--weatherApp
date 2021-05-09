
import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';
import { myWeathers, openWeatherBogota } from 'src/mocks/open-weather.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'project-gradiweb';
  weatherBogota:any;
  weatherBerlin:any;
  weatherFrance:any;
  cityNameBogota:string="Bogota, co";
  cityNameBerlin:string="Berlin, de";
  cityNameParis:string="Paris, fr";
  myCountriesArr:any=[];
  bogotaDaysArr:any = [];
  theWeathers:any = myWeathers;
  theWeatherBogota = openWeatherBogota;
  constructor(private weatherService:WeatherService){

    Promise.all([
       this.weatherService.getWeatherOfCity(this.cityNameBogota), 
      this.weatherService.getWeatherOfCity(this.cityNameParis), 
      this.weatherService.getWeatherOfCity(this.cityNameBerlin)])
      .then(values => {
      // console.log(values); // [3, 1337, "foo"]
      for (let x of values) {
        this.myCountriesArr.push(x);
      }
     
    });

    // console.log(this.weatherService.getNextDaysWeather(this.cityNameBogota))


    // Promise.all([
    //   this.weatherService.getNextDaysWeather(this.cityNameBogota)
    //   ])
    //   .then(value=>{
    //     console.log(value);
    //   })

    // this.myCountriesArr.push(this.weatherBogota,this. weatherBerlin, this.weatherFrance);
    // console.log(this.myCountriesArr);
  }


  


}
