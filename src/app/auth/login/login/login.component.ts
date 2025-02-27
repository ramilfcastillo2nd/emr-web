import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LayoutService } from 'src/app/shared/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  rememberMe = false;
  constructor(private authService: AuthService, private router: Router, private layoutService: LayoutService) { }

  get dark(): boolean {
    return this.layoutService.config.colorScheme !== 'light';
  }

  login() {
    // Implement your login logic here
    // For example, authenticate the user and set the token in local storage
    localStorage.setItem('authToken', 'your-auth-token');
    this.router.navigate(['/main/dashboard']);
  }
}
