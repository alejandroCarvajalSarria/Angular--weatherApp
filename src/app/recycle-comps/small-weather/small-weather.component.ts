import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
import * as countries from './../../../assets/json/countries.json';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery'

@Component({
  selector: 'app-small-weather',
  templateUrl: './small-weather.component.html',
  styleUrls: ['./small-weather.component.css']
})
export class SmallWeatherComponent implements OnInit, AfterViewInit {
  @Input() countryObj:any;
  
  // mainTemp:number= countryObj.main.temp
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
    const myUrl ="url('http://openweathermap.org/img/wn/"+iconCode+"@2x.png')";
$("#" + this.countryObj.sys.id).css('background-image', myUrl);
  }


}
