import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { SmallWeatherComponent } from './recycle-comps/small-weather/small-weather.component';
import { NewSmallComponent } from './recycle-comps/new-small/new-small.component';
import { BogMainComponent } from './structure-comps/bog-main/bog-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallWeatherComponent,
    NewSmallComponent,
    BogMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
