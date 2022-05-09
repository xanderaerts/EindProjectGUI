import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddTankbeurtFormComponent } from './add-tankbeurt-form/add-tankbeurt-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TankBeurtListComponent } from './tank-beurt-list/tank-beurt-list.component'

const routes:Routes=[
  {path:'',component:HomepageComponent},
  {path:'addForm',component:AddTankbeurtFormComponent},
  {path:'overview',component:TankBeurtListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainMenuComponent,
    AddTankbeurtFormComponent,
    TankBeurtListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
