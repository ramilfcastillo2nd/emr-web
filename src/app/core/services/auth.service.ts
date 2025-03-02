import { Injectable } from '@angular/core';
import { HttpRequestService } from './http.request';
import { environment } from '../../../environments/environment';
import { LoginInputDto } from '../models/login-input-dto';
import { LoginOutputDto } from '../models/login-output-dto';
import { Observable } from 'rxjs';

const apiBaseUrl = `${environment.apiUrl}/api`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpRequestService: HttpRequestService) { }

  isAuthenticated(): boolean {
    // Implement your authentication logic here
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('authToken');
  }

  login(loginInput: LoginInputDto): Observable<LoginOutputDto> {
    return this.httpRequestService.post<any>(
      `${apiBaseUrl}/account/login`,
      loginInput
    );
  }
}