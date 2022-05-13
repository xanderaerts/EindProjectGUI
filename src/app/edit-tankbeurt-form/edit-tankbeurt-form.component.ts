import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { TankBeurtenService } from '../services/tank-beurten.service';
import { tankBeurt } from '../tankbeurt.model';

@Component({
  selector: 'app-edit-tankbeurt-form',
  templateUrl: './edit-tankbeurt-form.component.html',
  styleUrls: ['./edit-tankbeurt-form.component.css'],
  providers: [TankBeurtenService]
})
export class EditTankbeurtFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,private tankBeurtService : TankBeurtenService,private router: Router) { }

  kms: string = '';
  liters: string = '';
  bedrag: string = '';
  datum : Date = new Date();
  currentTankbeurt: tankBeurt =  new tankBeurt(-1,"1/1/1",-1,-1,-1);

  onFormSubmit(f: NgForm){
    this.tankBeurtService.updateTankbeurt(this.currentTankbeurt).subscribe(
      (res : tankBeurt ) => {
        this.tankBeurtService.getList();
        this.router.navigate(['overview']);
       console.log("current: ",res);
      }
    );
  }

  onCancel(){
    this.router.navigate(['overview']);
  }

  ngOnInit(): void {
    console.log("hey ik besta vanaf nu");

    var id = this.route.snapshot.params['id'] as number;
    console.log("test");
    
    this.tankBeurtService.getTankbeurt(id).subscribe(
      (res : tankBeurt) => {
        this.currentTankbeurt = res;
      }
    );
  }

}