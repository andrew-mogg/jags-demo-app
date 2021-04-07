import { TestBed } from '@angular/core/testing';

import { QuarterbackService } from './quarterback.service';

describe('QuarterbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuarterbackService = TestBed.get(QuarterbackService);
    expect(service).toBeTruthy();
  });
});
