import { TestBed } from '@angular/core/testing';

import { NewsSerService } from './news-ser.service';

describe('NewsSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsSerService = TestBed.get(NewsSerService);
    expect(service).toBeTruthy();
  });
});
