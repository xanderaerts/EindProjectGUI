import { KeyValueDiffers, Pipe, PipeTransform } from '@angular/core';
import { TankBeurt } from '../tankbeurt.model';

@Pipe({
  name: 'sortPipe',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: TankBeurt[],input:string,order:boolean): TankBeurt[] {
    input =  input.toLowerCase();
    var x1 = 1;
    var x2 = -1;

    if(!order){
      x1 = -1;
      x2 = 1;
    }

    if(input == "datum"){
      value.sort((x,y) => {return new Date(x.date) < new Date(y.date) ? x1 : x2})
    }
    else if(input == 'liters')
    {
      value.sort((x,y) => {return x.totLiters < y.totLiters ?  x1 : x2 });
    }
    else if(input == 'prijs'){
      value.sort((x,y) => {return x.totPrice < y.totPrice ? x1 : x2 } );
    }
    else if(input == 'km'){
      value.sort((x,y) => {return x.kmStand < y.kmStand ? x1 : x2 } );
    }
    return value;
  }



  
}
