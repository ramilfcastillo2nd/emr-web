import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private jwtToken = new BehaviorSubject<string>('');
  private roleId = new BehaviorSubject<number>(0);
  private userId = new BehaviorSubject<number>(0);
  private email = new BehaviorSubject<string>('');
  private firstName = new BehaviorSubject<string>('');
  private lastName = new BehaviorSubject<string>('');
  jwtToken$ = this.jwtToken.asObservable();
  roleId$ = this.roleId.asObservable();
  userId$ = this.userId.asObservable();
  email$ = this.email.asObservable();
  firstName$ = this.firstName.asObservable();
  lastName$ = this.lastName.asObservable();
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
  getRoleId() {
    return this.roleId.value;
  }
  setRoleId(roleId: number) {
    this.roleId.next(roleId);
  }
  getUserId() {
    return this.userId.value;
  }
  setUserId(userId: number) {
    this.userId.next(userId);
  }
  getEmail() {
    return this.email.value;
  }
  setEmail(email: string) {
    this.email.next(email);
  }
  getFirstName() {
    return this.firstName.value;
  }
  setFirstName(firstName: string) {
    this.firstName.next(firstName);
  }
  getLastName() {
    return this.lastName.value;
  }
  setLastName(lastName: string) {
    this.lastName.next(lastName);
  }
  clearToken() { 
    localStorage.removeItem("authToken");
    this._setJWTToken('');
  }

  private _setJWTToken(tokenValue: string) {
    this.jwtToken.next(tokenValue);
  }
}
