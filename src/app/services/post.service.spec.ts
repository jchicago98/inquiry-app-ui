import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { PostClass } from '../models/post-class.model';

import { PostService } from './post.service';
import { environment } from 'src/environments/environment';

describe('PostService', () => {
  let service: PostService;
  let baseURL: string = environment.baseURL;
  let fakePosts: PostClass[] =
    [
      new PostClass(100, undefined, "This is a test 1", true, true, true, "This is a test 1"),
      new PostClass(101, undefined, "This is a test 2", true, true, true, "This is a test 2")
    ];
  let createdPost = new PostClass(101, undefined, "This is a test 2", true, true, true, "This is a test 2");

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    httpClientSpy.get.and.returnValue(of(fakePosts));
    httpClientSpy.post.and.returnValue(of(createdPost));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('given I call the postMessage(), then it should make a POST call to the correct URL and return a Post', () => {
    service.postMessage(fakePosts[101]).subscribe(
      res => expect(res).toEqual(createdPost)
    );
    expect(httpClientSpy.post).toHaveBeenCalledWith(baseURL + "/create-post/save", fakePosts[101], jasmine.any(Object));
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
    service.getAllPosts().subscribe({
      next: posts => done.fail('expected an error'),
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
    service.getAllPosts().subscribe({
      next: posts => done.fail('expected an error'),
      error: error => {
        expect(error.message).toEqual('Something bad happened; please try again later.');
        done();
      }
    });
  });


});
