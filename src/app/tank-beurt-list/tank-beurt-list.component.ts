import { Component, OnInit } from '@angular/core';
import { TankBeurt } from '../models/tankbeurt.model';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs';
import { Admin } from '../models/admin.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-tank-beurt-list',
  templateUrl: './tank-beurt-list.component.html',
  styleUrls: ['./tank-beurt-list.component.css'],
  providers: [TankBeurtenService]
})
export class TankBeurtListComponent implements OnInit {

  tankbeurten : TankBeurt[] = [];
  sortType: string = "datum";
  order: boolean = true;
  
  constructor(private dataservice : DataService,private authservice : AuthService) {}

  onDeleteClick(id: string){

    if(confirm("Zeker dat je deze tankbeurt wilt verwijderen?")){
      this.dataservice.deleteTankbeurt(id).subscribe(
        (res : any)=>{
          this.getTankbeurten();
        })
    }
  }

  calcAvg(index : number) : number{
    this.tankbeurten.sort((x,y) => {return new Date(x.date) < new Date(y.date) ? 1 : -1})


    let prevKmTot,km,liters = 0;
    let currentKmTot = this.tankbeurten[index].kmStand;

/*    if(index <= 0){
      prevKmTot = this.tankbeurten[index].kmStand;
      km = this.tankbeurten[index].kmStand;
    }*/
    if(index + 1 >= this.tankbeurten.length){
      prevKmTot = this.tankbeurten[index].kmStand;
      km = this.tankbeurten[index].kmStand;
    }
    else{
      liters = this.tankbeurten[index].totLiters;
      prevKmTot = this.tankbeurten[index+1].kmStand;    
      km = currentKmTot - prevKmTot;
    }

    if(km == 0){
      return 0;
    }

    let gemL = (liters*100) / km;
    return Math.round((gemL + Number.EPSILON) * 100) /100;
  }

  calcKm(index : number) : number{
    /*if(index <=  0 ){
      return 0;
    }*/
    if(index + 1 >= this.tankbeurten.length){
      return 0;
    }
    
    let curKm = this.tankbeurten[index].kmStand;
    let prevKm = this.tankbeurten[index+1].kmStand;

    return curKm - prevKm;
  }

  getTankbeurten(){
    this.dataservice.getList().subscribe(
      (response : TankBeurt[]) => {
        this.tankbeurten = response;
      },
      (error) => console.log("error:",error));
  }

  changeSort(sortType : string){
    this.sortType = sortType;
    this.order = !this.order;
  }

  isAdmin(){
    var test =  this.authservice.isAdmin();
    console.log("isAdminComp",test);
    return test;
  }



  ngOnInit(): void {
    this.getTankbeurten();
  }

}
