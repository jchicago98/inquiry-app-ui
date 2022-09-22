import { TestBed } from '@angular/core/testing';

import { InquiryserviceService } from './inquiryservice.service';

describe('InquiryserviceService', () => {
  let service: InquiryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
