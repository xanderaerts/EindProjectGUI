import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  isLogged : boolean = false; 
  ngOnInit(): void {
    this.isLogged = this.authservice.isLoggedIn();
  }

  onLogout(){
    this.authservice.logout();
    
  }

}
