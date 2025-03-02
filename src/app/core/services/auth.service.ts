import { Injectable } from '@angular/core';
import { HttpRequestService } from './http.request';
import { environment } from '../../../environments/environment';
import { LoginInputDto } from '../models/login-input-dto';
import { HttpClient } from '@angular/common/http';
import { ERR_AUTH_CODE_MSG } from '../../app.constants';
import { StorageService } from './storage.service';

const apiBaseUrl = `${environment.apiUrl}/api`;
interface IAuthUser {
  firstName ?: string;
  lastName ?: string;
  email ?: string;
  userId ?: number;
  roleId ?: number; 
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser: IAuthUser | any = null;
  constructor(private httpRequestService: HttpRequestService, private http: HttpClient, private storageService: StorageService) { }

  isAuthenticated(): boolean {
    // Implement your authentication logic here
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('authToken');
  }

  login(loginInput: LoginInputDto) {
    return new Promise ((resolve,reject)=>{
      this.http.post(`${apiBaseUrl}/account/login`, loginInput).subscribe({
        next: (response: any) => {                              
          if(response.statusCode == 200){               
            localStorage.setItem("authToken", response.data.token);            
            this.setAuthUser(response.data);
          }                                      
          resolve(response);         
        },
        error: (err: any) => {  
          let errorMessage = '';
          switch(err.error.status){
            case 401:
              errorMessage = ERR_AUTH_CODE_MSG[401];
              break;
            case 404:
              errorMessage = ERR_AUTH_CODE_MSG[404];
              break;
            default:
              break;
          }
          reject({
            code: err.error.status,
            message: errorMessage
          });
        }
      })
    });
  }
  
  setAuthUser(data: any) {
    const token = localStorage.getItem('authToken');
    try {
      if (token) {
        this.storageService.setJWTToken();
        this.storageService.setRoleId(data.roleId);
        this.storageService.setUserId(data.userId);
        this.storageService.setEmail(data.email);
        this.storageService.setFirstName(data.firstName);
        this.storageService.setLastName(data.lastName);
        //console.log('token split: ', JSON.parse(atob(token.split('.')[1])));
        this.authUser = JSON.parse(atob(token.split('.')[1]));
      } else {
        this.authUser = null;
      }
    } catch (e) {
      this.authUser = null;
    }
  }
}