import { Injectable } from '@angular/core';
import { IPost } from './post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = 'https://flipapp-1f726.firebaseio.com/.json';
  // private postUrl = '../../api/posts/posts.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPost(id: number): Observable<IPost | undefined> {
    return this.getPosts().pipe(
      map((posts: IPost[]) => posts.find(p => p.postId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly.
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend return an unsuccesful response code.
      // The response body may contain clues as to what went woring,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
