import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../shared/layout/app.layout.component';


const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../shared/demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
      { path: 'uikit', data: { breadcrumb: 'UI Kit' }, loadChildren: () => import('../shared/demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
      { path: 'utilities', data: { breadcrumb: 'Utilities' }, loadChildren: () => import('../shared/demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
      { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('../shared/demo/components/pages/pages.module').then(m => m.PagesModule) },
      { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('../shared/demo/components/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('../shared/demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
      { path: 'blocks', data: { breadcrumb: 'Prime Blocks' }, loadChildren: () => import('../shared/demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
      { path: 'ecommerce', data: { breadcrumb: 'E-Commerce' }, loadChildren: () => import('../shared/demo/components/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
      { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('../shared/demo/components/apps/apps.module').then(m => m.AppsModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' },
    ]
  },
  { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('../shared/demo/components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'landing', loadChildren: () => import('../shared/demo/components/landing/landing.module').then(m => m.LandingModule) },
  { path: 'notfound', loadChildren: () => import('../shared/demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
