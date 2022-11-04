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
    email : new FormControl(null,[Validators.required,Validators.email],[this.checkDubbleEmail.bind(this)]),
    password : new FormControl(null,[Validators.required,Validators.minLength(6)]),
    passwordConfirm : new FormControl(null,[Validators.required,this.validPasswords()])
  });
  
  constructor(public authService: AuthService,private router:Router) {}

   onSubmit(){
    const email = this.signupForm.value.email;
    const pswd = this.signupForm.value.password;

    this.authService.signup(email, pswd).then((res) => {
      if(res == 'succes'){
        this.router.navigate(['login']);
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
          return {passwordMisMatch:true};
        }
      }
      return null;
    }
  }

  checkDubbleEmail(control : AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      if(control.hasError('email')){
        resolve(null);
        null;
      }
      this.authService.emailSignInCheck(control.value).then(resp => {
        if(resp.length>0){
          resolve({'emailInUse' : true});
        }
        resolve(null);
      })
      .catch(() => {resolve({'email' : true}
      )})
    })
  }
  
}
