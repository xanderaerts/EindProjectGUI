import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.minLength(6)]),
    passwordConfirm : new FormControl(null,[Validators.required,this.validPasswords()])
  });
  
  constructor(public authService: AuthService,private router:Router) {}

   onSubmit(){
    const email = this.signupForm.value.email;
    const pswd = this.signupForm.value.password;

    this.authService.signup(email, pswd).then((res) => {
      if(res == 'succes'){
        this.router.navigate(['home']);
      }else{
        alert(res);
      }
    })

   }

  ngOnInit(): void {
  }

  validPasswords(){
    return (control : AbstractControl): ValidationErrors | null => {
      let pswd = control.root.get('password')?.value;
      let pswdC = control.root.get('passwordConfirm')?.value;
      if(pswd && pswdC){
        if(pswd != pswdC){
          return {passwordMismatch : true};
        }
      }
      return null;
    }
  }

}
