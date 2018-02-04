import { Injectable, Type } from '@angular/core';
import { CmdImitatorComponent, LineData } from '../cmd-imitator/cmd-imitator.component';

export class LineItem {
  constructor(public component: Type<any>, public data: LineData[]) {}
}

@Injectable()
export class CmdImitatorService {

  constructor() { }

  getLines() {
    return [
      new LineItem(CmdImitatorComponent, [{text: 'SomeText', color: 'green'}]),
      new LineItem(CmdImitatorComponent, [{text: 'SomeText2'}]),
      new LineItem(CmdImitatorComponent, [{text: 'SomeText3'}]),
      new LineItem(CmdImitatorComponent, [{text: 'SomeText4'}])
    ];
  }

}
