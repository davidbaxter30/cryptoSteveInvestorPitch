import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { InvestmentSliderComponent } from './investment-slider/investment-slider.component';
import { CmdImitatorComponent } from './cmd-imitator/cmd-imitator.component';
import { LineHostDirective } from './line-host-directive/line-host.directive';
import { CmdImitatorService } from './services/cmd-imitator.service';
import { CmdConsoleComponent } from './cmd-console/cmd-console.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SplashPageComponent,
    InvestmentSliderComponent,
    CmdImitatorComponent,
    LineHostDirective,
    CmdConsoleComponent
  ],
  entryComponents: [ CmdImitatorComponent ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
    CmdImitatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
