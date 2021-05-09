import { openWeatherBogota } from './../../mocks/open-weather.mock';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {throwError} from 'rxjs'
import { openWeatherBerlin } from 'src/mocks/open-weather.mock';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }


  public async getWeatherOfCity(cityName:string): Promise<any> {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };

    // const respond: any = await this.httpClient.
    // get(environment.apiOpenWeather+"/weather?q="+cityName 
    // +"&units=metric&appid="+environment.apiKeyOpenWeather, 
    // httpOptions).toPromise();

    // if (!respond) { throwError('respond'); }
    return openWeatherBerlin;
  
  }


  public async getNextDaysWeather(cityName:string): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

    // const respond: any = await this.httpClient.
    // get(environment.apiOpenWeather+"/forecast/daily?q="+cityName 
    // +"&cnt=3&appid="+environment.apiKeyOpenWeather, 
    // httpOptions).toPromise();
    
    // if (!respond) { throwError('respond'); }
    return openWeatherBerlin
  }






}//END OF SERVICE



