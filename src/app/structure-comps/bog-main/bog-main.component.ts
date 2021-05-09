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

  ngAfterViewInit(){
    $(document).scroll(()=> this.onScrollPositionFix());
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



}
