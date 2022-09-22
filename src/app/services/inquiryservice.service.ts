import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostClass } from '../models/post-class.model';

@Injectable({
  providedIn: 'root'
})
export class InquiryserviceService {
  private developers?: PostClass[];
  private baseURL: string = environment.baseURL;

  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAllDevelopers(): Observable<PostClass[]> {
    return this.httpClient.get<PostClass[]>(this.baseURL + "/all").pipe(
      map(res => {
        this.developers = res;
        return this.developers;
      }),
      catchError(this.handleError)
    );
  }

  postDeveloper(dev: PostClass): Observable<PostClass> {
    return this.httpClient.post<PostClass>(this.baseURL + "/save",
      dev, this.postHeaders
    ).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  putDeveloper(dev: PostClass): Observable<PostClass> {
    return this.httpClient.put<PostClass>(this.baseURL + "/update",
      dev, this.postHeaders
    ).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  getDeveloperById(id: number): Observable<PostClass | undefined> {
    if (!this.developers) {
      return this.getAllDevelopers().pipe(
        map(() => this.developers?.find(dev => dev.id == id)),
        catchError(this.handleError)
      );
    } else {
      return of(this.developers.find(dev => dev.id == id));
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
