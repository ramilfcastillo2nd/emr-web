import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(
    private _storageService: StorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //const token = localStorage.getItem(`${environment.tokenName}`);    
    const token = this._storageService.getJWTToken();       
    return next.handle(request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    }));
  }
}
