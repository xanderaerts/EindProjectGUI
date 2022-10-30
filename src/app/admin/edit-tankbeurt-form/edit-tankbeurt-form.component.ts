import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../can-component-deactivate.guard';
import { DataService } from '../../services/data.service';
import { TankBeurtenService } from '../../services/tank-beurten.service';
import { TankBeurt } from '../../models/tankbeurt.model';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-edit-tankbeurt-form',
  templateUrl: './edit-tankbeurt-form.component.html',
  styleUrls: ['./edit-tankbeurt-form.component.css'],
  providers: [TankBeurtenService]
})
export class EditTankbeurtFormComponent implements OnInit,CanComponentDeactivate {

  constructor(private route: ActivatedRoute,private router: Router,private dataservice: DataService) { }

  saved : boolean = false;

  id : string = "";
  currentTankbeurt: TankBeurt =  new TankBeurt("",'',-1,-1,-1);

  onFormSubmit(f: NgForm){
    this.saved = true;
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
    this.saved = false;

    this.id = this.route.snapshot.params['id'] as string;
    
    this.dataservice.getTankbeurt(this.id).subscribe(
      (res : TankBeurt) => {
        console.log(res);
        this.currentTankbeurt = res;
      }
    );
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if(this.saved === false){
      return confirm('Wil je alle veranderingen verwijderen?');
    }
    return true;
  };

}
