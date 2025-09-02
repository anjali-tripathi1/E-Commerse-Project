import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { Task } from '../task';


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

    api:ApiService = inject(ApiService)

    task:any[] = []
    loadTask(){
       this.api.getAllProducts().subscribe((val:any) => {
           this.task = val.data
       })
    }

    ngOnInit(){
       this.loadTask()
    }
}
