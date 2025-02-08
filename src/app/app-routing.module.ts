import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

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
                data: { preload: true }
              },
              {
                path: 'admin',
                loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
                data: { preload: true }
              }
            ]
          }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
