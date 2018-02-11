import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdConsoleComponent } from './cmd-console.component';

describe('CmdConsoleComponent', () => {
  let component: CmdConsoleComponent;
  let fixture: ComponentFixture<CmdConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
