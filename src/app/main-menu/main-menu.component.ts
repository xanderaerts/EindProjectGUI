import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  isLogged: boolean = false;
  ngOnInit(): void {
  }

  onLogout() {
    this.authservice.logout();
  }

  isLoggedin() : boolean{
    return this.authservice.isLoggedIn();
  }

}
