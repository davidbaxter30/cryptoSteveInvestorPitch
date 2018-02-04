import { Component, OnInit, Input } from '@angular/core';

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

  constructor( ) { 
  }

  ngOnInit() {
    this.revealLine();
  }

  revealLine() {
    setTimeout(
      () => {
        this.hideLine = false;
      }, 
      (Math.random() * 1000)
    );
  }

}
