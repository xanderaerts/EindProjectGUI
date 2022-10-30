import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AuthService } from './auth/auth.service';
import { Router,Route } from '@angular/router';
import { DataService } from './services/data.service';
import { map } from 'rxjs';
import { Admin } from './models/admin.model';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate,CanLoad {
  constructor(private authservice: AuthService,private router:Router,private dataservice:DataService){}


  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dataservice.getAdmin(this.authservice.getUid()
      ).pipe(map(
          (admin:Admin) => {
            if(admin){console.log("hey nu kom ik hier");return true}
            else {return false}
          }
        ))

    }

  canLoad(route:Route): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authservice.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
