import { Component, OnInit } from '@angular/core';
import { tankBeurt } from '../tankbeurt.model';
import { TankBeurtenService } from '../services/tank-beurten.service';

@Component({
  selector: 'app-tank-beurt-list',
  templateUrl: './tank-beurt-list.component.html',
  styleUrls: ['./tank-beurt-list.component.css'],
  providers: [TankBeurtenService]
})
export class TankBeurtListComponent implements OnInit {

  constructor(public tankBeurtService : TankBeurtenService) {}


  onEditClick(id : number){
    console.log("editing", id);
  }

  onDeleteClick(id: number){
    console.log("deleting",id);
  }

  calcAvg(id : number) : number{

    var prevKmTot,km,liters = 0;
    var currentKmTot = this.tankBeurtService.tankbeurten[id].kmStand;

    if(id <= 0){
      prevKmTot = this.tankBeurtService.tankbeurten[id].kmStand;
      km = this.tankBeurtService.tankbeurten[id].kmStand;
      console.log("km",km);
    }
    else{
      liters = this.tankBeurtService.tankbeurten[id].totLiters;
      prevKmTot = this.tankBeurtService.tankbeurten[id-1].kmStand;    
      km = currentKmTot - prevKmTot;
    }

    if(km == 0){
      return 0;
    }

    var gemL = (liters*100) / km;

    return gemL;
  }

  calcKm(id : number) : number{
    if(id <=  0 ){
      return 0;
    }
    
    var curKm = this.tankBeurtService.tankbeurten[id].kmStand;
    var prevKm = this.tankBeurtService.tankbeurten[id-1].kmStand;

    return curKm - prevKm;
  }




  ngOnInit(): void {
  }

}
