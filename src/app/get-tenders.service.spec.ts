import { TestBed, inject } from '@angular/core/testing';

import { GetTendersService } from './get-tenders.service';

describe('GetTendersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTendersService]
    });
  });

  it('should ...', inject([GetTendersService], (service: GetTendersService) => {
    expect(service).toBeTruthy();
  }));
});
