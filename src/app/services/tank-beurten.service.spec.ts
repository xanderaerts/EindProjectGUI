import { TestBed } from '@angular/core/testing';

import { TankBeurtenService } from './tank-beurten.service';

describe('TankBeurtenService', () => {
  let service: TankBeurtenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TankBeurtenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
