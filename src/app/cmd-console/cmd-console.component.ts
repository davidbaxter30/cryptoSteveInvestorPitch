import { 
  Component,
  AfterContentInit, 
  OnDestroy, 
  Input, 
  ViewChild, 
  ComponentFactoryResolver 
} from '@angular/core';
import { LineHostDirective } from '../line-host-directive/line-host.directive';
import { LineItem } from '../services/cmd-imitator.service';

@Component({
  selector: 'app-cmd-console',
  templateUrl: './cmd-console.component.html',
  styleUrls: ['./cmd-console.component.scss']
})
export class CmdConsoleComponent implements AfterContentInit, OnDestroy {
  @Input() lines: LineItem[];
  currentIndex: number = -1;

  @ViewChild(LineHostDirective) lineHost: LineHostDirective;
  subscription: any;
  interval: any;

  constructor( private componentFactoryResolver: ComponentFactoryResolver ) { }

  ngAfterContentInit() {
    this.loadComponent();
    this.startCmd();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentIndex = this.currentIndex + 1
    let adItem = this.lines[this.currentIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.lineHost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
   componentRef.instance.data = adItem.data;
  }

  startCmd() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
