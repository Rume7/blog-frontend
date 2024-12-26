// src/app/core/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(() => error.error);
  }

  get<T>(path: string,  options: { params?: HttpParams } = {}): Observable<T> {
    return this.http.get<T>(`${environment.blogApiUrl}${path}`, options )
      .pipe(catchError(this.formatErrors));
  }

  put<T>(path: string, body: object = {}): Observable<T> {
    return this.http.put<T>(
      `${environment.blogApiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post<T>(path: string, body: object = {}): Observable<T> {
    return this.http.post<T>(
      `${environment.blogApiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(
      `${environment.blogApiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}