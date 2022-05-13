import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { tankBeurt } from '../tankbeurt.model';

@Component({
  selector: 'app-add-tankbeurt-form',
  templateUrl: './add-tankbeurt-form.component.html',
  styleUrls: ['./add-tankbeurt-form.component.css'],
  providers:[TankBeurtenService]
})
export class AddTankbeurtFormComponent implements OnInit {



  constructor(private tankbeurtservice : TankBeurtenService,private router: Router) { }

  onFormSubmit(f: NgForm){
    let date = new Date().toUTCString();
    //var newTankbeurt = new tankBeurt(null,date,f.value.amountLiters,f.value.totKms,f.value.totPrice);

    const newTankbeurt = {
      id:null,
      date: date,
      totLiters: f.value.amountLiters,
      totPrice: f.value.totPrice,
      kmStand: f.value.totKms
    }

    this.tankbeurtservice.addTankbeurt(newTankbeurt).subscribe(
      (res : tankBeurt) => {
        console.log(res);
        this.router.navigate(['overview']);
      }      
    )
    ;
      

  }

  onReset(){
    /*this.liters = '';
    this.kms = '';
    this.bedrag = '';*/
  }

  ngOnInit(): void {
  }

}
