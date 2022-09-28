import { Injectable } from '@angular/core';
import { PostClass } from '../models/post-class.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private post?: PostClass[];
  private baseURL: string = environment.baseURL+"/user-post";

  constructor(private httpClient: HttpClient) { }

  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  postMessage(userPost: PostClass): Observable<PostClass> {
    return this.httpClient.post<PostClass>(this.baseURL + "/save",
      userPost, this.postHeaders
    ).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
