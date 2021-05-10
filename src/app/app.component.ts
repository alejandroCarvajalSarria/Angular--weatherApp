
import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';
import { myWeathers, openWeatherBogota } from 'src/mocks/open-weather.mock';
import { daily } from './../mocks/days-bog.mock';

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
  nextTempsInBogota:any = [];
  theWeathers:any = myWeathers;
  theWeatherBogota = openWeatherBogota;
  latBogota:string= '4.60971';
  lonBogota:string= '-74.081749';
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  mockDaily:any = daily;
  constructor(private weatherService:WeatherService){

    // Promise.all([
    //    this.weatherService.getWeatherOfCity(this.cityNameBogota), 
    //   this.weatherService.getWeatherOfCity(this.cityNameParis), 
    //   this.weatherService.getWeatherOfCity(this.cityNameBerlin)])
    //   .then(values => {
    //   // console.log(values); // [3, 1337, "foo"]
    //   for (let x of values) {
    //     if(x.sys.country !== 'CO'){
    //       console.log(x);
    //       this.myCountriesArr.push(x);
    //     }else{
    //       this.weatherBogota = x;
    //     }
    //   }
     
    // });

    // console.log(this.weatherService.getNextDaysWeather(this.cityNameBogota))


    
      this.weatherService.getNextDaysWeather(this.latBogota,this.lonBogota)
      .then(nextDaysWeather=>{
        console.log(nextDaysWeather);
         for (const day of nextDaysWeather) {
           let temp:any = {};
           temp.min = day.temp.min;
           temp.max = day.temp.max
           const date = new Date(day.dt  * 1000);
           temp.day = this.days[date.getDay()];
           temp.main = day.weather[0].main;
          this.nextTempsInBogota.push(temp)
         }
      })

    // this.myCountriesArr.push(this.weatherBogota,this. weatherBerlin, this.weatherFrance);
    // console.log(this.myCountriesArr);
  }


  


}
