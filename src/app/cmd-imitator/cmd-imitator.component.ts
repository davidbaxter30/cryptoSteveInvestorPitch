import { Component, OnInit, Input } from '@angular/core';
import { CmdImitatorService } from '../services/cmd-imitator.service';

export interface LineData {
  text: string;
  color?: string;
}

@Component({
  selector: 'app-cmd-imitator',
  templateUrl: './cmd-imitator.component.html',
  styleUrls: ['./cmd-imitator.component.scss']
})
export class CmdImitatorComponent implements OnInit {

  @Input() data: LineData[]
  hideLine: boolean = true;

  constructor( private cmdImitatorService: CmdImitatorService ) { 
  }

  ngOnInit() {
    this.revealLine();
  }

  revealLine() {
    setTimeout(
      () => {
        this.cmdImitatorService.pushNewLine();
        this.hideLine = false;
      }, 
      (Math.random() * 1000)
    );
  }

}
