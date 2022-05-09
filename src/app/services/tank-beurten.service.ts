import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tankBeurt } from '../tankbeurt.model';

@Injectable({
  providedIn: 'root'
})
export class TankBeurtenService {

  tankbeurten: tankBeurt[] = [];

  constructor(private http: HttpClient) {
    const url = 'http://localhost:3000/tankbeurten';
    console.log("test");
    this.http.get(url).subscribe(
      {
        next: (res :any ) => {
          this.tankbeurten = res;
          console.log(this.tankbeurten);
        },
      }
    )
  }

  getList(){
    const url = 'http://localhost:3000/tankbeurten';
    console.log(this.http.get<tankBeurt[]>(url));
    this.http.get(url).subscribe(
      {
        next: (res :any ) => {
          this.tankbeurten = res;
          console.log(this.tankbeurten);
        },
      }
    )
  }
}
