import { TestBed } from '@angular/core/testing';

import { DoctorauthgardService } from './doctorauthgard.service';

describe('DoctorauthgardService', () => {
  let service: DoctorauthgardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorauthgardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
