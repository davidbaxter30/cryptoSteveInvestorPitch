import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { LineItem, CmdImitatorService } from '../services/cmd-imitator.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {

  line: boolean[];
  lines: LineItem[];

  constructor(private cmdImitatorService: CmdImitatorService) { }

  ngOnInit() {
    this.lines = this.cmdImitatorService.getLines();

    this.line = new Array(12).fill(true, 0, 12);
    this.revealConsoleReadout();
  }

  revealConsoleReadout(): void {
    this.line.forEach((item: boolean, index: number) => {
      setTimeout(
        () => {
          // uncomment to avoid previous line showing up after this one. 
          // if (this.line[index -1]) this.line[index -1] = false;
          this.line[index] = false
        }, 
        (Math.random() * 1000) + index * 500
      );
    })
  }

  hideLine(lnNumber: number): boolean {
    return this.line[lnNumber];
  }

}
