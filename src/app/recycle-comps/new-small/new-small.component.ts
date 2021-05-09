import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
import * as countries from './../../../assets/json/countries.json';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery'

@Component({
  selector: 'app-new-small',
  templateUrl: './new-small.component.html',
  styleUrls: ['./new-small.component.css']
})
export class NewSmallComponent implements OnInit, AfterViewInit {
  @Input() countryObj:any;
  
  constructor(private sanitization:DomSanitizer) { 
    
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.setWeatherImg(this.countryObj.weather[0].icon);
  }

  roundMe(it){
    return Math.round(it);
  }

  returnFullCountryName(countryCode){
    for (let key in countries.default) {
      if (countries.default.hasOwnProperty(key) && countries.default[key].abbreviation == countryCode ) {
        return countries.default[key].country;
    }
    }
  }


  setWeatherImg(iconCode){

    const currentWeather = this.countryObj.weather[0].main.toLowerCase();
    const myUrl ="url('http://openweathermap.org/img/wn/"+iconCode+"@2x.png')";
    const cloudyImage = "./../../../assets/imgs/clouds.png";
    const clearImage = "./../../../assets/imgs/clear.png";

      if(currentWeather == 'clouds'){
        $("#" + this.countryObj.sys.id).css('background-image', "url('"+cloudyImage+"')");
      }else if(currentWeather == 'clear'){
        $("#" + this.countryObj.sys.id).css('background-image', "url('"+clearImage+"')");
      }else{
        $("#" + this.countryObj.sys.id).css('background-image', myUrl);
      }

  }


}
