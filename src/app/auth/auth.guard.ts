import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService,private router : Router){}
  
  canActivate(route : ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
    if(this.authService.isLoggedIn()){
      console.log("het")
      return true;
    }    
    else{
      console.log("hoi")
      this.router.navigate(['login']);
      return false;
    }
   }
  
}
