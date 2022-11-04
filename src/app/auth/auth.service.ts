import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Auth, createUserWithEmailAndPassword,fetchSignInMethodsForEmail,signInWithEmailAndPassword} from '@angular/fire/auth'
import { DataService } from '../services/data.service';
import { Admin } from '../models/admin.model';
import { map,take,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emailUser = new Subject();

  activeUserEmail(mail : string){
    this.emailUser.next(mail);
  }

  constructor(private router : Router, private auth:Auth,private dataservice : DataService) {
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
    }
   }

  token : string | null = null ;
  adminState: boolean = false;

  getUid(){
    if(this.auth.currentUser){
      return this.auth.currentUser.uid;
    }
    else{
      return null;
    }
  }

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
            this.activeUserEmail(email);
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


  isAdmin(){
    return this.dataservice.getAdmin(this.getUid()
      ).pipe(
        take(1),
        map(
          (admin:Admin) => {
            if(admin){;return true}
            else {return false}
          }
    ))
  }

  emailSignInCheck(email: string) : Promise<string[]>{
    return fetchSignInMethodsForEmail(this.auth,email);
  }


}

