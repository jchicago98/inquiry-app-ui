import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MessageService);
describe('MessageserviceService', () => {
  let service: MessageService;

  beforeEach(() => {

    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MessageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
