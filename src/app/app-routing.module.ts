import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './auth/login/login/login.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  // { path: '', redirectTo: '/app/main/dashboard', pathMatch: 'full' },
  // {
  //     path: 'account',
  //     loadChildren: () => import('account/account.module').then((m) => m.AccountModule), //Lazy load account module
  //     data: { preload: true },
  // },
  // {
  //     path: 'pages',
  //     loadChildren: () => import('pages/pages.module').then(m => m.PagesModule), //Lazy load account module
  //     data: { preload: true }
  // },
  // { path: '**', redirectTo: '/app/main/dashboard' }
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/main/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
        data: { preload: true },
        canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        data: { preload: true },
        canActivate: [AuthGuard]
      },
      {
        path: 'auth/login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
