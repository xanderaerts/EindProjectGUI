import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {Storage,ref,getDownloadURL} from '@angular/fire/storage'


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit,OnDestroy {

  constructor(public authservice: AuthService, private router: Router,private storage:Storage) { 
    const pr = ref(storage,'img/car.png');
      getDownloadURL(pr).then((url:string)=>{console.log(url);this.imgUrl = url;})
  }

  isLogged: boolean = false;
  emailUser: string | any = '';
  imgUrl:string = "";

  ngOnInit(): void {
    this.authservice.emailUser.subscribe(
      (value) => {
        console.log(value);
        this.emailUser = value;
      })
      
    }

  onLogout() {
    this.authservice.logout();
  }

  isLoggedin() : boolean{
    return this.authservice.isLoggedIn();
  }
  ngOnDestroy(): void {
      this.authservice.emailUser.unsubscribe();
  }

}
