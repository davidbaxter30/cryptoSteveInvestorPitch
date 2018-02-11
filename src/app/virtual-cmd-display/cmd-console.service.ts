import { Injectable, Type } from '@angular/core';
import { CmdLineComponent, LineData } from './cmd-line/cmd-line.component';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Utilities } from './utilities/'

export class LineItem {
  constructor(public component: Type<any>, public data: LineData[]) {}
}

export interface LineConfig {
  initial: LineData[][];
  pool: LineData[][];
}

@Injectable()
export class CmdConsoleService {

  public lineSubject: Subject<LineData[]> = new Subject();
  private initialSetCurrentIndex: number = -1;
  private randomLinesSinceComplete: number = 0;
  private linePool: LineData[][];
  private initialLines: LineData[][];

  constructor() { }

  // getRandomLine
  private getNewLine() {
    // count the number that have been 
    // chosen since last complete
    this.randomLinesSinceComplete++;

    // choose new line index from array length
    let newLineIndex = Math.floor(Math.random() * this.linePool.length);
    if (this.randomLinesSinceComplete <= 5 && newLineIndex + 1 === this.linePool.length) {
      newLineIndex--;
    } else if ( this.randomLinesSinceComplete > 5 && newLineIndex + 1 === this.linePool.length) {
      this.randomLinesSinceComplete = 0;
    }
    let newLine: LineData[] = Utilities.CloneArray(this.linePool)[newLineIndex];
    
    if (newLineIndex === 0) {
      newLine[0].text = newLine[0].text.replace('{hashrate}', this.getRandomHashRate() )
    }

    // reset lines since complete if complete is chosen
    if (newLineIndex === this.linePool.length - 1) {
    };

    return newLine;
  }

  private getRandomHashRate() {
    return (3000 + (Math.random() * 300)).toFixed(3).toString()
  }

  setLines(config: LineConfig) {
    this.initialLines = config.initial;
    this.linePool = config.pool;

  }

  // function line can call after it shows itself
  // should push next random line to stream
  pushNewLine() {
    // if initial set hasn't completed use initial set and
    // increment current index;
    if ( this.initialSetCurrentIndex < this.initialLines.length ) {
      this.initialSetCurrentIndex++;
      this.lineSubject.next(this.initialLines[this.initialSetCurrentIndex])
    } else {
      this.lineSubject.next(this.getNewLine());
    }
  };

}
