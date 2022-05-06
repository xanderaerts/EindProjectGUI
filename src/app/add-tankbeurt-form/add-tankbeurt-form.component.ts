import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-tankbeurt-form',
  templateUrl: './add-tankbeurt-form.component.html',
  styleUrls: ['./add-tankbeurt-form.component.css']
})
export class AddTankbeurtFormComponent implements OnInit {

  constructor() { }

  onFormSubmit(f: NgForm){
  

  }

  onCancel(){
    
  }

  ngOnInit(): void {
  }

}
