import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm:FormGroup;
  invalidLogin = false;

  constructor(public authService : AuthService,private router:Router) {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required])
    });
   }

   onLogin(){
    const email = this.loginForm.value.email;
    const pswd = this.loginForm.value.password;

    this.authService.login(email,pswd).then(
      (resp) => {
        if(!resp){
          this.invalidLogin = true;
        }
        else{
          this.invalidLogin = false;
          this.router.navigate(['home']);
        }
      }
    )

   }

  ngOnInit(): void {
  }

}
