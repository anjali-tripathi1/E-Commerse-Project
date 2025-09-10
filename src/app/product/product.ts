import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { RouterLink } from '@angular/router';
import { ProductDetail } from "../product-detail/product-detail";
import { ProductService } from '../service/product.service';
import { Products } from '../models/product';



@Component({
  selector: 'app-product',
  imports: [CommonModule,  RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

    api:ApiService = inject(ApiService)
    product:ProductService = inject(ProductService)
    task!:Products[]

    // loadTask(){
    //    this.api.getAllProducts().subscribe((val:any) => {
    //        this.task = val.data
    //    })
    // }

    ngOnInit(){
       this.task = this.product.products
    }







}



