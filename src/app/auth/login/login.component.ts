import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInputDto } from '../../core/models/login-input-dto';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { LayoutService } from '../../shared/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  rememberMe = false;
  logInput: LoginInputDto = { email: '', password: '' };
  constructor(private authService: AuthService, private storageService: StorageService private router: Router, private layoutService: LayoutService) { }

  get dark(): boolean {
    return this.layoutService.config.colorScheme !== 'light';
  }

  login() {
    // Implement your login logic here
    // For example, authenticate the user and set the token in local storage
    this.authService.login(this.logInput).subscribe((response) => {
      localStorage.setItem('authToken', response.token);
      this.setAuthUser();
      this.router.navigate(['/main/dashboard']);
    }, (error) => {
      console.error(error);
      alert('Invalid email or password');
    });
  }

  setAuthUser() {
    const token = localStorage.getItem('authToken');
    try {
      if (token) {
        this.storageService.setJWTToken();
        this.authUser = JSON.parse(atob(token.split('.')[1]));
      } else {
        this.authUser = null;
      }
    } catch (e) {
      this.authUser = null;
    }
  }
}
