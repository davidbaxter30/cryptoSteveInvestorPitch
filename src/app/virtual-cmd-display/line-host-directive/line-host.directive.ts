import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[line-host]'
})
export class LineHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
