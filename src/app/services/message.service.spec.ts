import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { MessageService } from './message.service';

describe('MessageserviceService', () => {
  let service: MessageService;

  beforeEach(() => {
<<<<<<< HEAD:src/app/services/message.service.spec.ts
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
=======
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MessageserviceService);
>>>>>>> main:src/app/services/messageservice.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
