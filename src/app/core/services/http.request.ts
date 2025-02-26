import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  private createHttpOptions(params: HttpParams, responseType: 'json' | 'arraybuffer' | 'blob' | 'text') {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params,
      responseType: responseType as 'json' | 'arraybuffer' | 'blob' | 'text'
    };
  }

  requestConfig(params: HttpParams, responseType: 'json' | 'arraybuffer' | 'blob' | 'text') {
    return this.createHttpOptions(params, responseType);
  }

  post<T>(url: string, model: T, params: HttpParams = new HttpParams(), responseType: 'json' | 'arraybuffer' | 'blob' | 'text' = 'json'): Observable<T> {
    const options = this.requestConfig(params, responseType);
    if (model instanceof FormData) {
      options.headers = options.headers.delete('Content-Type');
    }
    return this.http.post<T>(url, model, { ...options, responseType: responseType as 'json' });
  }

  put<T>(url: string, model: T, params: HttpParams = new HttpParams(), responseType: 'json' | 'arraybuffer' | 'blob' | 'text' = 'json'): Observable<T> {
    const options = this.requestConfig(params, responseType);
    return this.http.put<T>(url, model, { ...options, responseType: responseType as 'json' });
  }

  get<T>(url: string, params: HttpParams = new HttpParams(), responseType: 'json' | 'arraybuffer' | 'blob' | 'text' = 'json'): Observable<T> {
    const options = this.requestConfig(params, responseType);
    return this.http.get<T>(url, { ...options, responseType: responseType as 'json' });
  }

  delete<T>(url: string, params: HttpParams = new HttpParams(), responseType: 'json' | 'arraybuffer' | 'blob' | 'text' = 'json'): Observable<T> {
    const options = this.requestConfig(params, responseType);
    return this.http.delete<T>(url, { ...options, responseType: responseType as 'json' });
  }
}