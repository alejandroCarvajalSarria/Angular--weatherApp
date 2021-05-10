import { openWeatherBogota } from './../../mocks/open-weather.mock';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {throwError} from 'rxjs'
import { daily } from './../../mocks/days-bog.mock';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }


  public async getWeatherOfCity(cityName:string): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const respond: any = await this.httpClient.
    get(environment.apiOpenWeather+"/weather?q="+cityName 
    +"&units=metric&appid="+environment.apiKeyOpenWeather, 
    httpOptions).toPromise();

    if (!respond) { throwError('respond'); }

    return respond
    // return "HEllo";
  
  }


  public async getNextDaysWeather(lat:string,lon:string): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

// https://api.openweathermap.org/data/2.5/
// onecall?lat=4.60971&lon=-74.081749&units=metric
// &appid=112276c68784e8c5396cc01eb6f6105c
// &exclude=current,minutely,hourly,alerts

    const request: any = await this.httpClient.
    get(environment.apiOpenWeather+"/onecall?lat="+lat 
    +"&lon="+lon + "&units=metric&appid="+ environment.apiKeyOpenWeather+
    "&exclude=current,minutely,hourly,alerts", httpOptions).toPromise();
    
    if (!request) { throwError('respond'); }
    // let myresponse:any = 
    let respond:any= request.daily.splice(1,3)

    return respond
    
    // return daily.splice(1,3);
  }






}//END OF SERVICE



