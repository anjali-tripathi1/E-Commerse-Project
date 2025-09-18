import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Header } from './header/header';
import { Forget } from './pages/admin/forget/forget';
import { SignUp } from './pages/admin/sign-up/sign-up';
import { Home } from './home/home';
import { Products } from './pages/admin/products/products';
import { Product } from './product/product';
import { ProductDetail } from './product-detail/product-detail';
import { BuyNow } from './buy-now/buy-now';

export const routes: Routes = [
      {path:'', component:Home},
      {path:'home', component:Home},
     {path:'header',  component:Header},
     {path:'login', component:Login},
     {path:'forget', component:Forget},
     {path:'sign-up', component:SignUp},
     {path:'product', component:Product},
    //  {path:'product', children:[
    //    {path:'product/:id', component:ProductDetail}
    //  ]}
    {path:'product/:id', component:ProductDetail},
    {path:'buy-now', component:BuyNow}
];
