import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
   providedIn : 'root'
})

export class AuthService{
     isSubmitted:boolean = false
     userService:UserService = inject(UserService)

     login(username:string, password:string){
        let user = this.userService.user.find((u) => {return u.username === username && u.password === password})

        if(user === undefined){
            this.isSubmitted = false
        } else
            this.isSubmitted = true
           return user

     }

     logout(){
       this.isSubmitted = false
     }

     isAuthenticated(){
        return this.isSubmitted
     }


}
