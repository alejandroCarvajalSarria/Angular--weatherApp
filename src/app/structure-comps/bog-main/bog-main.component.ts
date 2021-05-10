import { Component, OnInit , AfterViewInit, Input } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-bog-main',
  templateUrl: './bog-main.component.html',
  styleUrls: ['./bog-main.component.css']
})
export class BogMainComponent implements OnInit, AfterViewInit {
@Input('') bogotaObj:any;


  constructor(){}

  ngOnInit(){

  }

  // theMainTemp = Math.round(this.bogotaObj.main.temp)

  ngAfterViewInit(){
    $(document).scroll(()=> this.onScrollPositionFix());
    this.setBogLogo(this.bogotaObj.weather[0].icon);
  }

  setBogLogo(iconCode){
    const currentWeather = this.bogotaObj.weather[0].main.toLowerCase();
    const myUrl ="url('http://openweathermap.org/img/wn/"+iconCode+"@2x.png')";
    const cloudyImage = "./../../../assets/imgs/clouds.png";
    const clearImage = "./../../../assets/imgs/clear.png";
    console.log(currentWeather)
      if(currentWeather == 'clouds'){
        console.log("HERE")
        $("#" + this.bogotaObj.sys.id + "BOG").css('background-image', "url('"+cloudyImage+"')");
      }else if(currentWeather == 'clear'){
        $("#" + this.bogotaObj.sys.id + "BOG").css('background-image', "url('"+clearImage+"')");
      }else{
        $("#" + this.bogotaObj.sys.id + "BOG").css('background-image', myUrl);
      }
  }


  onScrollPositionFix(){
// console.log($('#mainBogFixed').offset().top + $('#mainBogFixed').height() )
if($('#mainBogFixed').offset().top + $('#mainBogFixed').height() >= 520){
  $('#mainBogFixed').css('position', 'absolute');
  $('#mainBogFixed').css('top', '280px');
}
if(window.scrollY <= 125){
  $('#mainBogFixed').css('position', 'fixed');
  $('#mainBogFixed').css('top', '150px');
}
  }


  roundThis(it){  
    Math.round(it);
  }


}
