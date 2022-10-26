import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { TankBeurt } from '../tankbeurt.model';

@Component({
  selector: 'app-edit-tankbeurt-form',
  templateUrl: './edit-tankbeurt-form.component.html',
  styleUrls: ['./edit-tankbeurt-form.component.css'],
  providers: [TankBeurtenService]
})
export class EditTankbeurtFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private dataservice: DataService) { }

  id : string = "";
  currentTankbeurt: TankBeurt =  new TankBeurt("",'',-1,-1,-1);

  onFormSubmit(f: NgForm){
    const newTankbeurt = {
      id:this.id,
      date: this.currentTankbeurt.date,
      totLiters: Number(f.value.amountLiters),
      totPrice: Number(f.value.totPrice),
      kmStand: Number(f.value.totKms)
    }

    this.dataservice.updateTankbeurt(newTankbeurt).subscribe(
      () => {
        this.dataservice.getList();
        this.router.navigate(['overview']);
      }
    );
  }

  onCancel(){
    this.router.navigate(['overview']);
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'] as string;
    
    this.dataservice.getTankbeurt(this.id).subscribe(
      (res : TankBeurt) => {
        console.log(res);
        this.currentTankbeurt = res;
      }
    );
  }

}
