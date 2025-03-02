import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private jwtToken = new BehaviorSubject<string>('');
  jwtToken$ = this.jwtToken.asObservable();
  constructor() { }

  getJWTToken() {
    if (this.jwtToken && (this.jwtToken.value === '' || this.jwtToken.value === null)) {
      this.setJWTToken();
    }
    return (this.jwtToken) ? this.jwtToken.value : null;
  }
  setJWTToken() {
    const tokenValue = localStorage.getItem("authToken");
    this._setJWTToken(tokenValue || '');
  }

  private _setJWTToken(tokenValue: string) {
    this.jwtToken.next(tokenValue);
  }
}
