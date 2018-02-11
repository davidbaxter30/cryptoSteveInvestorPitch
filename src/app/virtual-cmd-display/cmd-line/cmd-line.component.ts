import { Component, OnInit, Input } from '@angular/core';
import { CmdConsoleService } from '../cmd-console.service';

export interface LineData {
  text: string;
  color?: string;
}

@Component({
  selector: 'app-cmd-line',
  templateUrl: './cmd-line.component.html',
  styleUrls: ['./cmd-line.component.scss']
})
export class CmdLineComponent implements OnInit {

  @Input() data: LineData[]
  hideLine: boolean = true;

  constructor( private cmdConsoleService: CmdConsoleService ) { 
  }

  ngOnInit() {
    this.revealLine();
  }

  revealLine() {
    setTimeout(
      () => {
        this.cmdConsoleService.pushNewLine();
        this.hideLine = false;
      }, 
      (Math.random() * 1000)
    );
  }

}
