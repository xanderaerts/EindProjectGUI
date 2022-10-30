import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { EditTankbeurtFormComponent } from './edit-tankbeurt-form/edit-tankbeurt-form.component';


@NgModule({
  declarations: [
    EditTankbeurtFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
