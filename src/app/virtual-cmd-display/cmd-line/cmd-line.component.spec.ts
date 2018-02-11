import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdLineComponent } from './cmd-line.component';

describe('CmdLineComponent', () => {
  let component: CmdLineComponent;
  let fixture: ComponentFixture<CmdLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
