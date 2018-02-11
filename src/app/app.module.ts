import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { InvestmentSliderComponent } from './investment-slider/investment-slider.component';
import { VirtualCmdDisplayModule } from './virtual-cmd-display/virtual-cmd-display.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SplashPageComponent,
    InvestmentSliderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    VirtualCmdDisplayModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
