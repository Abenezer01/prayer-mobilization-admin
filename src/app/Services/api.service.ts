import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppError } from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private url, public http: HttpClient) { }
  // private baseUrl = BaseUrl.getURL;
  getAll() {
    return this.http.get(this.url).pipe(map((response: any) => response), catchError(this.handleError));
  }
  create(resource) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: headers
    };
    const body = resource;
    return this.http
      .post(this.url, body, options)
      .pipe(map((response: any) => response), catchError(this.handleError));
  }
  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map((response: any) => response), catchError(this.handleError));
  }
  delete(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(map((response: any) => response), catchError(this.handleError));
  }
  getOneItem(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: headers
    };
    return this.http
      .get(this.url + '/' + id)
      .pipe(map((response: any) => response), catchError(this.handleError));
  }
  customeCreate(body) {
    return this.http
      .post(this.url, body)
      .pipe(map((response: any) => response), catchError(this.handleError));
  }
  updateWithFormData(body, resource_id) {
    return this.http
      .post(this.url + '/' + resource_id, body)
      .pipe(map((response: any) => response), catchError(this.handleError));
  }
  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    if (error.status === 422) {
      return throwError(error.json());
    }
    if (error.status === 401) {
      return throwError(error.json());
    }

    return throwError(new AppError(error));
  }
}
