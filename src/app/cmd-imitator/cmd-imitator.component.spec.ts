import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdImitatorComponent } from './cmd-imitator.component';

describe('CmdImitatorComponent', () => {
  let component: CmdImitatorComponent;
  let fixture: ComponentFixture<CmdImitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdImitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdImitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
