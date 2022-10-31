import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth'
import { DataService } from '../services/data.service';
import { Admin } from '../models/admin.model';
import { map,Observable } from 'rxjs';
import { UrlTree,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router, private auth:Auth,private dataservice : DataService) { }

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
            if(admin){console.log("hey nu kom ik hier");return true}
            else {return false}
          }
        ))
  }
}

