import { 
  Component,
  AfterContentInit, 
  OnDestroy, 
  Input, 
  ViewChild, 
  ComponentFactoryResolver 
} from '@angular/core';
import { LineHostDirective } from '../line-host-directive/line-host.directive';
import { LineItem, CmdImitatorService } from '../services/cmd-imitator.service';
import { Subscription } from 'rxjs/Subscription';
import { LineData, CmdImitatorComponent } from '../cmd-imitator/cmd-imitator.component';

@Component({
  selector: 'app-cmd-console',
  templateUrl: './cmd-console.component.html',
  styleUrls: ['./cmd-console.component.scss']
})
export class CmdConsoleComponent implements AfterContentInit, OnDestroy {
  @Input() lines: LineItem[];
  currentLine$: Subscription; 
  currentIndex: number = -1;
  maxViewLenght: number = 18;

  @ViewChild(LineHostDirective) lineHost: LineHostDirective;
  subscription: any;
  interval: any;

  constructor( private componentFactoryResolver: ComponentFactoryResolver,
  private cmdImitatorService: CmdImitatorService ) { }

  ngAfterContentInit() {
    this.currentLine$ = this.cmdImitatorService.lineSubject.subscribe((lineDataConfig: LineData[]) => {
      this.loadComponent(lineDataConfig);
    });
    this.cmdImitatorService.pushNewLine();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    this.currentLine$.unsubscribe();
  }

  loadComponent(configArray: LineData[]) {
    const newLineItem = new LineItem(CmdImitatorComponent, configArray);

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
