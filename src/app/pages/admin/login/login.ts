import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
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
          this.router.navigate(['/header'])
       }
    }
}
