import { Component, OnInit } from '@angular/core';
import { tankBeurt } from '../tankbeurt.model';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tank-beurt-list',
  templateUrl: './tank-beurt-list.component.html',
  styleUrls: ['./tank-beurt-list.component.css'],
  providers: [TankBeurtenService]
})
export class TankBeurtListComponent implements OnInit {


  tankbeurten : tankBeurt[] = [];

  constructor(public tankBeurtService : TankBeurtenService) {}

  onDeleteClick(id: number){

    if(confirm("Zeker dat je deze tankbeurt wilt verwijderen?")){
      this.tankBeurtService.deleteTankbeurt(id).subscribe(
        (res : any)=>{
          this.getTankbeurten();
        }
      )
    }
  }

  calcAvg(id : number) : number{

    var prevKmTot,km,liters = 0;
    var currentKmTot = this.tankbeurten[id].kmStand;

    if(id <= 0){
      prevKmTot = this.tankbeurten[id].kmStand;
      km = this.tankbeurten[id].kmStand;
      console.log("km",km);
    }
    else{
      liters = this.tankbeurten[id].totLiters;
      prevKmTot = this.tankbeurten[id-1].kmStand;    
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
    
    var curKm = this.tankbeurten[id].kmStand;
    var prevKm = this.tankbeurten[id-1].kmStand;

    return curKm - prevKm;
  }

  getTankbeurten(){
    this.tankBeurtService.getList().subscribe(
      (response : tankBeurt[]) => {
        this.tankbeurten = response;
      },
      (error) => console.log("error:",error),
      () => console.log("ready")
    );
  }

  ngOnInit(): void {
    this.getTankbeurten();
  }
}
