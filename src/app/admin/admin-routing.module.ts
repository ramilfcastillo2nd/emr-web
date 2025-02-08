import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';

const routes: Routes = [  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
      { path: 'uikit', data: { breadcrumb: 'UI Kit' }, loadChildren: () => import('../demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
      { path: 'utilities', data: { breadcrumb: 'Utilities' }, loadChildren: () => import('../demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
      { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('../demo/components/pages/pages.module').then(m => m.PagesModule) },
      { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('../demo/components/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('../demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
      { path: 'blocks', data: { breadcrumb: 'Prime Blocks' }, loadChildren: () => import('../demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
      { path: 'ecommerce', data: { breadcrumb: 'E-Commerce' }, loadChildren: () => import('../demo/components/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
      { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('../demo/components/apps/apps.module').then(m => m.AppsModule) },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: '**', redirectTo: 'profile' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
