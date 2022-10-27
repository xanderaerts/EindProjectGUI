import { Component, OnInit } from '@angular/core';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { TankBeurt } from '../tankbeurt.model'
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [TankBeurtenService]
})
export class HomepageComponent implements OnInit {

  totLiters = 0;
  totPrice = 0;
  totKm = 0;


  constructor(public authService:AuthService,private dataservice:DataService,private router:Router) {
    this.calcTotConsumpions();
   }

  ngOnInit(): void {
  }

  calcTotConsumpions(){
    let tankbeurten : TankBeurt[] = [];
    this.dataservice.getList().subscribe(
      (response : TankBeurt[]) => {
        tankbeurten = response;
        for(let i = 0;i<tankbeurten.length;i++){
          this.totLiters += tankbeurten[i].totLiters;
          this.totPrice += tankbeurten[i].totPrice;
          this.totKm += tankbeurten[i].kmStand;
        }

        this.totKm -= tankbeurten[0].kmStand;
    
      },
      (error) => console.log("error:",error));
  }

  calcTotAvg(){
    
    var gem = (this.totLiters) * 100 /this.totKm;
    return Math.round((gem + Number.EPSILON)*100 ) / 100 
  }



}
