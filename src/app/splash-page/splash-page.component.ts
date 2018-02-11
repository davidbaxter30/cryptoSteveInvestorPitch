import { Component } from '@angular/core';
import { InitialLines } from '../constants/initialLines';
import { LinePool } from '../constants/linePool';
import { LineConfig } from '../virtual-cmd-display/cmd-console.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent {

  consoleConfig: LineConfig = { initial: InitialLines, pool: LinePool }

  constructor() { }
}
