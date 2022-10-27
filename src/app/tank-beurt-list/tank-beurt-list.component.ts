import { Component, OnInit } from '@angular/core';
import { TankBeurt } from '../tankbeurt.model';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tank-beurt-list',
  templateUrl: './tank-beurt-list.component.html',
  styleUrls: ['./tank-beurt-list.component.css'],
  providers: [TankBeurtenService]
})
export class TankBeurtListComponent implements OnInit {


  tankbeurten : TankBeurt[] = [];
  

  constructor(private dataservice : DataService) {}

  sortbyDate(a : string, b : string){
    if(a < b ){
      return 1;
    }
    else if (a > b ){
      return -1;
    }
    return 0;
  }

  
  onDeleteClick(id: string){

    if(confirm("Zeker dat je deze tankbeurt wilt verwijderen?")){
      this.dataservice.deleteTankbeurt(id).subscribe(
        (res : any)=>{
          this.getTankbeurten();
        })
    }
  }


  calcAvg(index : number) : number{

    let prevKmTot,km,liters = 0;
    let currentKmTot = this.tankbeurten[index].kmStand;

    if(index <= 0){
      prevKmTot = this.tankbeurten[index].kmStand;
      km = this.tankbeurten[index].kmStand;
    }
    else{
      liters = this.tankbeurten[index].totLiters;
      prevKmTot = this.tankbeurten[index-1].kmStand;    
      km = currentKmTot - prevKmTot;
    }

    if(km == 0){
      return 0;
    }

    let gemL = (liters*100) / km;
    return Math.round((gemL + Number.EPSILON) * 100) /100;
  }

  calcKm(index : number) : number{
    if(index <=  0 ){
      return 0;
    }
    
    let curKm = this.tankbeurten[index].kmStand;
    let prevKm = this.tankbeurten[index-1].kmStand;

    return curKm - prevKm;
  }

  getTankbeurten(){
    this.dataservice.getList().subscribe(
      (response : TankBeurt[]) => {
        this.tankbeurten = response;
        this.tankbeurten.sort((a,b) => this.sortbyDate(a.date,b.date))
      },
      (error) => console.log("error:",error));
  }



  ngOnInit(): void {
    this.getTankbeurten();
  }

}
