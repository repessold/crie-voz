/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoElevenService } from './info-eleven.service';


describe('Service: InfoEleven', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoElevenService]
    });
  });

  it('should ...', inject([InfoElevenService], (service: InfoElevenService) => {
    expect(service).toBeTruthy();
  }));
});
