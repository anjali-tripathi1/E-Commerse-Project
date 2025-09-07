import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from "../home/home";


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink,],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    show:boolean = false

    clickShow(){
       this.show = true
    }
}
