import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { SmallWeatherComponent } from './recycle-comps/small-weather/small-weather.component';
import { NewSmallComponent } from './recycle-comps/new-small/new-small.component';
import { BogMainComponent } from './structure-comps/bog-main/bog-main.component';
import { PlaceToVisitComponent } from './recycle-comps/place-to-visit/place-to-visit.component';
import { BogForecastComponent } from './recycle-comps/bog-forecast/bog-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallWeatherComponent,
    NewSmallComponent,
    BogMainComponent,
    PlaceToVisitComponent,
    BogForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
