import { Component, OnInit } from '@angular/core';
import { tankBeurt } from '../tankbeurt.model';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { FormBuilder } from '@angular/forms';

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
        })

        for(let i = 0;i<this.tankbeurten.length;i++){
          this.tankbeurten[i].id = this.tankbeurten[i].id - 1;
          //this.tankBeurtService.updateList();
        }

    }
  }

  calcAvg(id : number) : number{

    let prevKmTot,km,liters = 0;
    let currentKmTot = this.tankbeurten[id].kmStand;

    if(id <= 0){
      prevKmTot = this.tankbeurten[id].kmStand;
      km = this.tankbeurten[id].kmStand;
    }
    else{
      liters = this.tankbeurten[id].totLiters;
      prevKmTot = this.tankbeurten[id-1].kmStand;    
      km = currentKmTot - prevKmTot;
    }

    if(km == 0){
      return 0;
    }

    let gemL = (liters*100) / km;
    return Math.round((gemL + Number.EPSILON) * 100) /100;
  }

  calcKm(id : number) : number{
    if(id <=  0 ){
      return 0;
    }
    
    let curKm = this.tankbeurten[id].kmStand;
    let prevKm = this.tankbeurten[id-1].kmStand;

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
