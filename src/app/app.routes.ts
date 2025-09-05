import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Header } from './header/header';

export const routes: Routes = [
     {path: 'login', component:Login},
     {path: 'header', component:Header}
];
