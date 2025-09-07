import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Product } from "./product/product";
import { Login } from "./pages/admin/login/login";
import { Forget } from "./pages/admin/forget/forget";
import { Home } from "./home/home";
import { ApiService } from './service/api.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'E-commerce';


  api:ApiService = inject(ApiService)

  getData(){
     this.api.getAllProducts().subscribe((data) => {
           console.log(data);

     })
  }


}
