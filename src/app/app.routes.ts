import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Header } from './header/header';
import { Forget } from './pages/admin/forget/forget';

export const routes: Routes = [
     {path: 'login', component:Login},
     {path: 'header', component:Header},
     {path:'forget', component:Forget}
];
