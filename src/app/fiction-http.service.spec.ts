import { TestBed, inject } from '@angular/core/testing';

import { FictionHttpService } from './fiction-http.service';

describe('FictionHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FictionHttpService]
    });
  });

  it('should be created', inject([FictionHttpService], (service: FictionHttpService) => {
    expect(service).toBeTruthy();
  }));
});
