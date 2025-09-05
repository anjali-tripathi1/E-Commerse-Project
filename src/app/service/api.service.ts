import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../task";

@Injectable({
   providedIn:'root'
})

export class ApiService{
     http:HttpClient = inject(HttpClient)

     getAllProducts(){
        return this.http.get('https://freeapi.gerasim.in/api/BigBasket/GetAllProducts')
     }
}
