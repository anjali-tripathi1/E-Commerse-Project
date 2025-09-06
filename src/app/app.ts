import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Product } from "./product/product";
import { Login } from "./pages/admin/login/login";
import { Forget } from "./pages/admin/forget/forget";


@Component({
  selector: 'app-root',
  imports: [Login, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'E-commerce';
}
