import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import {initializeApp,provideFirebaseApp} from '@angular/fire/app'
import {getFirestore,provideFirestore} from '@angular/fire/firestore'
import {provideAuth,getAuth} from '@angular/fire/auth'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddTankbeurtFormComponent } from './add-tankbeurt-form/add-tankbeurt-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TankBeurtListComponent } from './tank-beurt-list/tank-beurt-list.component';
import { AddEuroPipe } from './pipes/add-euro.pipe';
import { AddKmPipe } from './pipes/add-km.pipe';
import { AddLitersPipe } from './pipes/add-liters.pipe';
import { TankbeurtListPageComponent } from './tankbeurt-list-page/tankbeurt-list-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth/auth.guard';
import { SortPipe } from './pipes/sort.pipe';

import {MatIconModule} from '@angular/material/icon';
import { ListStyleDirective } from './list-style.directive';
import { getStorage, provideStorage } from '@angular/fire/storage';

const routes:Routes=[
  {path:'home',component:HomepageComponent,canActivate:[AuthGuard]},
  {path:'addForm',component:AddTankbeurtFormComponent,canActivate:[AuthGuard]},
  {path:'overview',component:TankbeurtListPageComponent,canActivate:[AuthGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AuthGuard]},
  {path: '**', redirectTo: '/login'}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainMenuComponent,
    AddTankbeurtFormComponent,
    TankBeurtListComponent,
    AddEuroPipe,
    AddKmPipe,
    AddLitersPipe,
    TankbeurtListPageComponent,
    SortPipe,
    ListStyleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(()=> getStorage()),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
