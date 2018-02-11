import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmdLineComponent } from './cmd-line/cmd-line.component';
import { LineHostDirective } from './line-host-directive/line-host.directive';
import { CmdConsoleService } from './cmd-console.service';
import { CmdConsoleComponent } from './cmd-console/cmd-console.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [ CmdLineComponent ],
  declarations: [
    CmdLineComponent,
    LineHostDirective,
    CmdConsoleComponent
  ],
  exports: [
    CmdConsoleComponent
  ],
  providers: [
    CmdConsoleService
  ]
})
export class VirtualCmdDisplayModule { }
