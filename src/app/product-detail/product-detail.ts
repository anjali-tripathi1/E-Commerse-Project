import { Component, inject, Input } from '@angular/core';
import { Product } from "../product/product";
import { ProductService } from '../service/product.service';
import { Products } from '../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from "../footer/footer";


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

   product:ProductService = inject(ProductService)
   activate:ActivatedRoute = inject(ActivatedRoute)
   products:Products
   courseId:number


   ngOnInit(){
      // this.products = this.product.products
       this.courseId = +this.activate.snapshot.paramMap.get('id')
       console.log(this.courseId);

       this.products = this.product.products.find((course) => course.productId === this.courseId)

      //  this.products = this.product.products
   }






}
