import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// import components for routes
import { InvestmentSliderComponent } from '../../investment-slider/investment-slider.component';
import { SplashPageComponent } from '../../splash-page/splash-page.component';

const routes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path: 'investment-slider',
    component: InvestmentSliderComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
