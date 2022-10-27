import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TankBeurt } from '../tankbeurt.model';

@Injectable({
  providedIn: 'root'
})
export class TankBeurtenService {

  showEditForm: boolean = false;

  //tankbeurten: TankBeurt[] = [];
  curren_Tankbeurt = '';

  constructor(private http: HttpClient) {
  }

  getList(){
    const url = 'http://localhost:3000/tankbeurten';
    return this.http.get<TankBeurt[]>(url);
  }

  getTankbeurt(id: number){
    const url = 'http://localhost:3000/tankbeurten/' + id;
    return this.http.get<TankBeurt>(url);
  }

  updateTankbeurt(tankbeurt : TankBeurt){
    const url = 'http://localhost:3000/tankbeurten/' + tankbeurt.id;
    return this.http.put<TankBeurt>(url,tankbeurt);
  }

  addTankbeurt(tankbeurt : TankBeurt){
    const url = 'http://localhost:3000/tankbeurten/';
    return this.http.post<TankBeurt>(url,tankbeurt);
  }

  deleteTankbeurt(id : number){
    const url = 'http://localhost:3000/tankbeurten/' + id;
    return this.http.delete(url);
  }  

  
  updateList(tankbeurten: TankBeurt[]){
   for(let i = 0;i<tankbeurten.length;i++){
    const url = 'http://localhost:3000/tankbeurten' + tankbeurten[i].id;
    return this.http.post<TankBeurt>(url,tankbeurten[i]);
   }


   return null;


  }
}
