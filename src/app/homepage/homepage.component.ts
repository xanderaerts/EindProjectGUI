import { Component, OnInit } from '@angular/core';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { tankBeurt } from '../tankbeurt.model'

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

  constructor(public tankBeurtService: TankBeurtenService) {
    this.calcTotConsumpions()
    console.log("test");
   }

  ngOnInit(): void {
  }

  calcTotConsumpions(){
    let tankbeurten : tankBeurt[] = [];
    this.tankBeurtService.getList().subscribe(
      (response : tankBeurt[]) => {
        tankbeurten = response;
        console.log(typeof(tankbeurten[0].totLiters));
        for(let i = 0;i<tankbeurten.length;i++){
          this.totLiters += tankbeurten[i].totLiters;
          this.totPrice += tankbeurten[i].totPrice;
          if(i == 0 || i == 1){
            this.totKm += tankbeurten[i].kmStand;
          }
          else{
            this.totKm += tankbeurten[i-1].kmStand -tankbeurten[i].kmStand;
            console.log(this.totKm,this.totPrice,this.totLiters);
          }
        }
    
      },
      (error) => console.log("error:",error),
      () => console.log("ready")
    );


  }
}
