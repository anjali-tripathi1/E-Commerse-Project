import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Header } from './header/header';
import { Forget } from './pages/admin/forget/forget';
import { SignUp } from './pages/admin/sign-up/sign-up';

export const routes: Routes = [
     {path:'login', component:Login},
     {path:'forget', component:Forget},
     {path:'sign-up', component:SignUp}
];
