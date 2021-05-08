import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {throwError} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }



  public async getWeatherOfCity(cityName:string): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: false
    };

    // q={city name}&appid={API key}
console.log(cityName)
    const respond: any = await this.httpClient.get(environment.apiOpenWeather+"?q="+cityName + "&appid="+environment.apiKeyOpenWeather, httpOptions).toPromise();
    if (!respond) { throwError('respond'); }
    return respond;
  }
}
