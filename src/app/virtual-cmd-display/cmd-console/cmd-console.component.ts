import { 
  Component,
  AfterContentInit, 
  OnDestroy, 
  OnInit,
  Input, 
  ViewChild, 
  ComponentFactoryResolver 
} from '@angular/core';
import { LineHostDirective } from '../line-host-directive/line-host.directive';
import { LineItem, CmdConsoleService, LineConfig } from '../cmd-console.service';
import { Subscription } from 'rxjs/Subscription';
import { LineData, CmdLineComponent } from '../cmd-line/cmd-line.component';

@Component({
  selector: 'cmd-console',
  templateUrl: './cmd-console.component.html',
  styleUrls: ['./cmd-console.component.scss']
})
export class CmdConsoleComponent implements AfterContentInit, OnDestroy, OnInit {
  @Input() config: LineConfig;
  currentLine$: Subscription; 
  currentIndex: number = -1;
  maxViewLenght: number = 18;

  @ViewChild(LineHostDirective) lineHost: LineHostDirective;
  subscription: any;
  interval: any;

  constructor( private componentFactoryResolver: ComponentFactoryResolver,
  private cmdConsoleService: CmdConsoleService ) {}

  ngOnInit() {
    this.cmdConsoleService.setLines(this.config);
  }

  ngAfterContentInit() {
    this.currentLine$ = this.cmdConsoleService.lineSubject.subscribe((lineDataConfig: LineData[]) => {
      this.loadComponent(lineDataConfig);
    });
    this.cmdConsoleService.pushNewLine();
  }

  ngOnDestroy() {
    this.currentLine$.unsubscribe();
  }

  loadComponent(configArray: LineData[]) {
    const newLineItem = new LineItem(CmdLineComponent, configArray);

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(newLineItem.component);

    let viewContainerRef = this.lineHost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = newLineItem.data;

    this.cleanView();
  }

  private cleanView(): void {
    if (this.lineHost.viewContainerRef.length > this.maxViewLenght) {
      this.lineHost.viewContainerRef.remove(this.lineHost.viewContainerRef.length - this.maxViewLenght - 1); 
    }             
  }
}
