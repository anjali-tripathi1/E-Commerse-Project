import { Component, inject } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  imports: [CommonModule],
  templateUrl: './buy-now.html',
  styleUrl: './buy-now.css'
})
export class BuyNow {
     products:Products
     courseId:number
     product:ProductService = inject(ProductService)
     activate:ActivatedRoute = inject(ActivatedRoute)

     ngOnInit(){
         this.courseId = +this.activate.snapshot.paramMap.get('id')
         console.log(this.courseId);

         this.products = this.product.products.find((course) => course.productId === this.courseId )
     }
}
