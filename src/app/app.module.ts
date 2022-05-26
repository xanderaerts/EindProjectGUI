import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddTankbeurtFormComponent } from './add-tankbeurt-form/add-tankbeurt-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TankBeurtListComponent } from './tank-beurt-list/tank-beurt-list.component';
import { EditTankbeurtFormComponent } from './edit-tankbeurt-form/edit-tankbeurt-form.component';
import { AddEuroPipe } from './pipes/add-euro.pipe';
import { AddKmPipe } from './pipes/add-km.pipe';
import { AddLitersPipe } from './pipes/add-liters.pipe';
import { TankbeurtListPageComponent } from './tankbeurt-list-page/tankbeurt-list-page.component';

const routes:Routes=[
  {path:'home',component:HomepageComponent},
  {path:'addForm',component:AddTankbeurtFormComponent},
  {path:'overview',component:TankbeurtListPageComponent},
  {path: 'editForm/:id',component:EditTankbeurtFormComponent},
  {path: '**', redirectTo: '/home'}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainMenuComponent,
    AddTankbeurtFormComponent,
    TankBeurtListComponent,
    EditTankbeurtFormComponent,
    AddEuroPipe,
    AddKmPipe,
    AddLitersPipe,
    TankbeurtListPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
