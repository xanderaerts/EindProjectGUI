import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tankBeurt } from '../tankbeurt.model';

@Injectable({
  providedIn: 'root'
})
export class TankBeurtenService {

  showEditForm: boolean = false;

  //tankbeurten: tankBeurt[] = [];
  curren_Tankbeurt = '';

  constructor(private http: HttpClient) {
  }

  getList(){
    const url = 'http://localhost:3000/tankbeurten';
    return this.http.get<tankBeurt[]>(url);
  }

  getTankbeurt(id: number){
    const url = 'http://localhost:3000/tankbeurten/' + id;
    console.log("hier");
    return this.http.get<tankBeurt>(url);
  }

  updateTankbeurt(tankbeurt : tankBeurt){
    const url = 'http://localhost:3000/tankbeurten/' + tankbeurt.id;
    return this.http.put<tankBeurt>(url,tankbeurt);
  }

  addTankbeurt(tankbeurt : tankBeurt){
    const url = 'http://localhost:3000/tankbeurten/';
    return this.http.post<tankBeurt>(url,tankbeurt);
  }

  deleteTankbeurt(id : number){
    const url = 'http://localhost:3000/tankbeurten/' + id;
    return this.http.delete(url);
  }  
}
