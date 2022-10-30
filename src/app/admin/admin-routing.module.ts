import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTankbeurtFormComponent } from './edit-tankbeurt-form/edit-tankbeurt-form.component';
import { CanComponentDeactivateGuard } from '../can-component-deactivate.guard';
import { AdminGuard } from '../admin.guard';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'adminFuncs', canActivate:[AdminGuard],
  children: [
    {
      path: 'editForm/:id',component:EditTankbeurtFormComponent,canDeactivate:[CanComponentDeactivateGuard],canLoad:[AdminGuard]
    }
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
