import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInputDto } from '../../core/models/login-input-dto';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { LayoutService } from '../../shared/layout/service/app.layout.service';
import { ERR_FORM_MSG } from 'src/app/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiErrMsg = '';
  rememberMe = false;
  hasSubmit = false;
  logInput: LoginInputDto = { email: '', password: '' };
  constructor(private authService: AuthService, private storageService: StorageService, private router: Router, private layoutService: LayoutService) { }

  get dark(): boolean {
    return this.layoutService.config.colorScheme !== 'light';
  }

  login() {
    // Implement your login logic here
    // For example, authenticate the user and set the token in local storage
    // this.authService.login(this.logInput).subscribe((response) => {
    //   localStorage.setItem('authToken', response.token);
    //   this.setAuthUser();
    //   this.router.navigate(['/main/dashboard']);
    // }, (error) => {
    //   console.error(error);
    //   alert('Invalid email or password');
    // });
    let errMsg  = 'Unexpected error. Please contact your administrator.';
    this.apiErrMsg = '';    
    this.hasSubmit = true;
    // this.showLoader('Logging in...');
    this.authService
    .login(this.logInput)
    .then((response: any) => {
      localStorage.removeItem("previousUrl");
      if (response.statusCode === 200) {
        this.router.navigate(['/main/dashboard']);
      }else{                                         
        if(response.errors.length > 0){   
          if(response.errors[0].description == 'Error logging in. Email has not been confirmed.') {
            errMsg = ERR_FORM_MSG.UNCONFIRMED_EMAIL;
          }
          if(response.errors[0].description.indexOf('not found') !== -1){
            errMsg = ERR_FORM_MSG.INVALID_LOGIN;
          }
        }
        this.apiErrMsg = errMsg;              
      }
    })
    .catch((e): any => {
      this.apiErrMsg = e.message
        ? e.message
        : errMsg;
    })
    .finally(() => {
      this.hasSubmit = false;
      //this.closeLoader();
    });
  }

}
