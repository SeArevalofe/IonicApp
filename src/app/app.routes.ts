import { Routes } from '@angular/router';

export const routes: Routes = [
 {path: '', loadComponent: ()=> import('./main/main.page').then(m => m.MainPage) },
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then( m => m.ProductListPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'prueba',
    loadComponent: () => import('./prueba/prueba.page').then( m => m.PruebaPage)
  }
];
