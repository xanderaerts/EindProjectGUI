import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { TankBeurt } from '../tankbeurt.model';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-tankbeurt-form',
  templateUrl: './add-tankbeurt-form.component.html',
  styleUrls: ['./add-tankbeurt-form.component.css'],
  providers:[TankBeurtenService]
})
export class AddTankbeurtFormComponent implements OnInit {



  constructor(private dataservice : DataService,private router: Router) { }

  liters = "";
  kms = "";
  bedrag = "";

  onFormSubmit(f: NgForm){
    let date:string = new Date().toString();
    console.log(date);
    //var newTankbeurt = new TankBeurt(null,date,f.value.amountLiters,f.value.totKms,f.value.totPrice);

    const newTankbeurt : TankBeurt = {
      id: "",
      date: date,
      totLiters: Number(f.value.amountLiters),
      totPrice: Number(f.value.totPrice),
      kmStand: Number(f.value.totKms)
    }

    this.dataservice.addTankbeurt(newTankbeurt).subscribe(
      () => {
        this.router.navigate(['overview']);
      }      
    );
  }

  onReset(){
    this.liters = '';
    this.kms = '';
    this.bedrag = '';
  }

  ngOnInit(): void {
  }

}
