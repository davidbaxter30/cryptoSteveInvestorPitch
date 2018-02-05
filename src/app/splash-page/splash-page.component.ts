import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { LineItem, CmdImitatorService } from '../services/cmd-imitator.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
