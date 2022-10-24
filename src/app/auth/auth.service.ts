import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import {Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router, private auth:Auth) { }

  token : string | null = null ;

  signup(email: string, passwd:string) : Promise<string> {
    return createUserWithEmailAndPassword(this.auth,email,passwd)
    .catch(error => {
      console.log(error);
      return error;
    })
    .then(() => {
      return 'succes';
    });
  }


  login(email: string, pswd: string){
    return signInWithEmailAndPassword(this.auth,email,pswd).then(
      () => {
        return this.auth.currentUser?.getIdToken().then(
          (token : string) => {
            this.token = token;
            localStorage.setItem('token',token);
            return true;
          }
        );
      })
      .catch(
        error => {
          console.log(error);
          return false;
        }
      )
  }

  logout(): void {
    this.auth.signOut();
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean{
    return this.token != null;
  }



}
