import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Home } from "../home/home";


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink,],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    show:boolean = false
    router:Router = inject(Router)

    clickShow(){
       this.show = true
    }

    navigate(event:Event){
       const target = event.target as HTMLSelectElement
       const route = target.value

       if(route){
          this.router.navigate([route])
       }
    }
}
