import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';
import { Forget } from "../forget/forget";





@Component({
  selector: 'app-login',
  imports: [CommonModule, Forget, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  show:boolean = true
  forget!:User
  showComponent:boolean = false
    authService:AuthService = inject(AuthService)
    router:Router = inject(Router)

    @ViewChild('username') username!:ElementRef
    @ViewChild('password') password!:ElementRef
    onLoginClicked(){
       const username = this.username.nativeElement.value
       const password = this.password.nativeElement.value
       const user = this.authService.login(username, password)

       if(user === undefined){
          alert('The Login credentials is not correct.')
       } else{
          alert('Welcome ' + user.name + ' you are logged.')

       }
    }

    toggleForget(){
        this.showComponent = true
        // this.router.navigate(['/login/forget'])
    }


}
