import { TestBed } from '@angular/core/testing';

import { GenereicService } from './genereic.service';

describe('GenereicService', () => {
  let service: GenereicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenereicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
