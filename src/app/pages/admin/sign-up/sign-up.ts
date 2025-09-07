import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  firstName:string = ''
  password:string = ''
  date:string = ''
  lastName:string = ''
  isAgreed:string = ''
  @ViewChild('form') form!:NgForm

  router:Router = inject(Router)

  genrateUser(){
     let username = ''
     if(this.firstName.length >= 3){
        username += this.firstName.slice(0, 3)
     } else{
        username += this.firstName
     }

     if(this.lastName.length >= 3){
        username += this.lastName.slice(0, 3)
     } else{
        username += this.lastName
     }

     let date = new Date(this.date)
     username += date.getFullYear()

     username = username.toLowerCase()
     console.log(username);

     this.form.form.patchValue({
       username : username
     })

  }

  onFormSubmit(){
     console.log(this.form);

  }

  clickSign(){
     this.router.navigate(['/login'])
  }
}
