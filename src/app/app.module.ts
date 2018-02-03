import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { InvestmentSliderComponent } from './investment-slider/investment-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SplashPageComponent,
    InvestmentSliderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
