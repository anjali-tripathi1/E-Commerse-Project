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


    products = [
          {
      productId: 2857,
      productSku: "NNG",
      productName: "Watch",
      productPrice: 998,
      productShortName: "Watch1 edit",
      productDescription: "Watchnjhuyu",
      createdDate: "2024-12-05T14:36:17.93",
      deliveryTimeSpan: "1-2 Days",
      categoryId: 55,
      productImageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hzfGVufDB8fDB8fHww",
      categoryName: "Fruits & Vegetables"
    },


     {
      productId: 2775,
      productSku: "ABCD",
      productName: "changedaaa",
      productPrice: 60000,
      productShortName: "Watch edit",
      productDescription: "Watch",
      createdDate: "2024-11-13T16:39:55.6",
      deliveryTimeSpan: "1-2 Days",
      categoryId: 173,
      productImageUrl: "https://images.unsplash.com/photo-1619976396248-56d05beb2919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHdhdGNoc3xlbnwwfHwwfHx8MA%3D%3D",
      categoryName: "Electronics"
    },
    ]
}
