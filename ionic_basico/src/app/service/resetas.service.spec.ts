import { TestBed } from '@angular/core/testing';

import { ResetasService } from './resetas.service';

describe('ResetasService', () => {
  let service: ResetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
