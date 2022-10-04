import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { InquiryUser } from '../models/inquiry-user.account';

import { InquiryService } from './inquiry.service';
import { environment } from 'src/environments/environment';

describe('InquiryserviceService', () => {
  let service: InquiryService;
  let baseURL: string = environment.baseURL;
  let fakeUsers: InquiryUser[] =
    [
      new InquiryUser(0, "Jorge", "Morin", new Date(7 / 10 / 1998), "jorge.morin@cognizant.com"),
      new InquiryUser(1, "Brenda", "Morin", new Date(12 / 1 / 1999), "bmorin@gmail.com")
    ]
  let userCompare = new InquiryUser(1, "Jorge", "Morin", new Date(7 / 10 / 1998), "jorge.morin@cognizant.com");

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    httpClientSpy.get.and.returnValue(of(fakeUsers));
    httpClientSpy.post.and.returnValue(of(userCompare));
    httpClientSpy.put.and.returnValue(of(userCompare));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(InquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('given I call the postUser(), then it should make a POST call to the correct URL and return a User', () => {
    service.postUser(fakeUsers[0]).subscribe(
      res => expect(res).toEqual(userCompare)
    );
    expect(httpClientSpy.post).toHaveBeenCalledWith(baseURL + "/inquiry-users/save", fakeUsers[0], jasmine.any(Object));
  });


  it('given I call the putUser(), then it should make a PUT call to the correct URL with the user passed in and return the updated user info', () => {
    service.putUser(fakeUsers[0]).subscribe(
      res => expect(res).toEqual(userCompare)
    );
    expect(httpClientSpy.put).toHaveBeenCalledWith(baseURL + "/inquiry-users/update", fakeUsers[0], jasmine.any(Object));
  });



  it('getUserById() should make get request to all users if local user array is empty', () => {

    service.getUserById(0).subscribe(
      () => expect(httpClientSpy.get).toHaveBeenCalledWith(baseURL + "/inquiry-users/all")
    );

  });

  it('getUserById() should search the local users array if it has users', () => {
    service.getAllUsers().subscribe(
      () => {
        service.getUserById(1).subscribe(
          res => expect(res).toEqual(fakeUsers[1])
        )
      }
    )
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
    service.getAllUsers().subscribe({
      next: users => done.fail('expected an error'),
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
    service.getAllUsers().subscribe({
      next: users => done.fail('expected an error'),
      error: error => {
        expect(error.message).toEqual('Something bad happened; please try again later.');
        done();
      }
    });
  });


});
