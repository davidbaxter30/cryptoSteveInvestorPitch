import { Injectable, Type } from '@angular/core';
import { CmdImitatorComponent, LineData } from '../cmd-imitator/cmd-imitator.component';
import { InitialLineSet } from '../constants/initialLines';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class LineItem {
  constructor(public component: Type<any>, public data: LineData[]) {}
}

@Injectable()
export class CmdImitatorService {

  public lineSubject: Subject<LineData[]> = new Subject();
  private initialSetCurrentIndex: number = -1;
  private randomLinesSinceComplete: number = 0;

  private linePool: LineData[][] = [
    [{text: 'mining at {hashrate}MH/s'}],
    [{text: 'Complete', color: 'green'}]
  ]

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
    let newLine: LineData[] = this.cloneArray(this.linePool)[newLineIndex];
    
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

  private cloneArray (existingArray): any[]{
    var newObj = [];
    for (let i in existingArray) {
       if (i == 'clone') continue;
       if (existingArray[i] && typeof existingArray[i] == "object") {
          newObj[i] = this.cloneArray(existingArray[i]);
       } else {
          newObj[i] = existingArray[i]
       }
    }
    return newObj;
  }

  // function line can call after it shows itself
  // should push next random line to stream
  pushNewLine() {
    // if initial set hasn't completed use initial set and
    // increment current index;
    if ( this.initialSetCurrentIndex < InitialLineSet.length ) {
      this.initialSetCurrentIndex++;
      this.lineSubject.next(InitialLineSet[this.initialSetCurrentIndex])
    } else {
      this.lineSubject.next(this.getNewLine());
    }
  };

}
