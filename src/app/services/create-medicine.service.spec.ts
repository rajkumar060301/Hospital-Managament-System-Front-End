import { TestBed } from '@angular/core/testing';

import { CreateMedicineService } from './create-medicine.service';

describe('CreateMedicineService', () => {
  let service: CreateMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
