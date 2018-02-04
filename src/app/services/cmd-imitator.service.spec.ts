import { TestBed, inject } from '@angular/core/testing';

import { CmdImitatorService } from './cmd-imitator.service';

describe('CmdImitatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmdImitatorService]
    });
  });

  it('should be created', inject([CmdImitatorService], (service: CmdImitatorService) => {
    expect(service).toBeTruthy();
  }));
});
