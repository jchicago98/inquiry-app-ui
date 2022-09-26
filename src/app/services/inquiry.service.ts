import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InquiryUser } from '../models/inquiry-user.account';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private users?: InquiryUser[];
  private baseURL: string = environment.baseURL;

  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<InquiryUser[]> {
    return this.httpClient.get<InquiryUser[]>(this.baseURL + "/all").pipe(
      map(res => {
        this.users = res;
        return this.users;
      }),
      catchError(this.handleError)
    );
  }

  postUser(user: InquiryUser): Observable<InquiryUser> {
    return this.httpClient.post<InquiryUser>(this.baseURL + "/save",
      user, this.postHeaders
    ).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  putUser(user: InquiryUser): Observable<InquiryUser> {
    return this.httpClient.put<InquiryUser>(this.baseURL + "/update",
      user, this.postHeaders
    ).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<InquiryUser | undefined> {
    if (!this.users) {
      return this.getAllUsers().pipe(
        map(() => this.users?.find(users => users.id == id)),
        catchError(this.handleError)
      );
    } else {
      return of(this.users.find(users => users.id == id));
    }
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
