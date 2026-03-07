import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'home', loadComponent: () => import('./views/home/home').then(m => m.Home) },
    { path: 'about', loadComponent: () => import('./views/about/about').then(m => m.About) },
    { path: 'account', loadComponent: () => import('./views/account/account').then(m => m.Account) },
    { path: 'error', loadComponent: () => import('./views/error/error').then(m => m.Error) },
    { path: 'payment', loadComponent: () => import('./views/payment/payment').then(m => m.Payment) },
    { path: 'cart', loadComponent: () => import('./views/cart/cart').then(m => m.Cart) },
    { path: 'contact', loadComponent: () => import('./views/contact/contact').then(m => m.Contact) },
    { path: 'product/:id', loadComponent: () => import('./views/product-details/product-details').then(m => m.ProductDetails) },


    


    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
