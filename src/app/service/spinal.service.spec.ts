import { TestBed } from '@angular/core/testing';

import { SpinalService } from './spinal.service';

describe('SpinalService', () => {
  let service: SpinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
