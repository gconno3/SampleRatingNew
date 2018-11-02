import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
