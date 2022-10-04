import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Message } from '../models/message.model';

import { MessageService } from './message.service';
import { environment } from 'src/environments/environment';
import { InquiryUser } from '../models/inquiry-user.account';

describe('MessageService', () => {
  let service: MessageService;
  let baseURL: string = environment.baseURL;
  let fakeMessages: Message[] =
    [
      new Message(100, undefined, undefined, "This is a test 1", new Date(7 / 10 / 1998)),
      new Message(101, new InquiryUser(100, "Jorge", "Morin", new Date(7 / 10 / 1998), "jmorin1@hawk.iit.edu"), new InquiryUser(101, "Brenda", "Morin", new Date(12 / 1 / 1999), "bmorin@gmail.com"), "This is a test 2", new Date(10 / 3 / 2022))
    ];
  let newMessage = new Message(101, new InquiryUser(100, "Jorge", "Morin", new Date(7 / 10 / 1998), "jmorin1@hawk.iit.edu"), new InquiryUser(101, "Brenda", "Morin", new Date(12 / 1 / 1999), "bmorin@gmail.com"), "This is a test 2", new Date(10 / 3 / 2022))

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    httpClientSpy.get.and.returnValue(of(fakeMessages));
    httpClientSpy.post.and.returnValue(of(newMessage));
    httpClientSpy.put.and.returnValue(of(newMessage));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
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


  it('given I call the getMessageThread(), then it should make a GET call to the correct URL and return a Message[]', () => {
    service.getMessageThread(undefined).subscribe(
      res => expect(res).toEqual(fakeMessages)
    );
    expect(httpClientSpy.get).toHaveBeenCalledWith(baseURL + "/messages/undefined");
  });


  it('given I call the putUser(), then it should make a PUT call to the correct URL with the message passed in and return the updated Message', () => {
    service.putUser(fakeMessages[101]).subscribe(
      res => expect(res).toEqual(newMessage)
    );
    expect(httpClientSpy.put).toHaveBeenCalledWith(baseURL + "/messages/update", fakeMessages[101], jasmine.any(Object));
  });


  it('given I call the postMessage(), then it should make a POST call to the correct URL and return a Post', () => {
    service.postMessage(fakeMessages[101]).subscribe(
      res => expect(res).toEqual(newMessage)
    );
    expect(httpClientSpy.post).toHaveBeenCalledWith(baseURL + "/messages/save", fakeMessages[101], jasmine.any(Object));
  });



  it('should handle 300, 400, 500 series errors from http requests using the handleErrors function', (done: DoneFn) => {
    const errorResponse404 = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    const errorResponse0 = new HttpErrorResponse({
      error: 'test 404 error',
      status: 0,
      statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(throwError(() => errorResponse404));
    service.getMessageThread(undefined).subscribe({
      next: messages => done.fail('expected an error'),
      error: error => {
        expect(error.message).toEqual('Something bad happened; please try again later.');
        done();
      }
    });

  });


  it('should handle 0 series error from http requests using the handleErrors function', (done: DoneFn) => {
    const errorResponse0 = new HttpErrorResponse({
      error: 'test 404 error',
      status: 0,
      statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(throwError(() => errorResponse0));
    service.getMessageThread(undefined).subscribe({
      next: messages => done.fail('expected an error'),
      error: error => {
        expect(error.message).toEqual('Something bad happened; please try again later.');
        done();
      }
    });
  });


});
