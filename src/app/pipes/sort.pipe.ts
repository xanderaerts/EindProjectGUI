import { KeyValueDiffers, Pipe, PipeTransform } from '@angular/core';
import { TankBeurt } from '../tankbeurt.model';

@Pipe({
  name: 'sortPipe',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: TankBeurt[],input:string): TankBeurt[] {
   input =  input.toLowerCase();
    if(input == "datum"){
      value.sort((x,y) => {return new Date(x.date) < new Date(y.date) ? 1 : -1})
    }
    else if(input == 'liters')
    {
      value.sort((x,y) => {return x.totLiters < y.totLiters ?  1 : -1 });
    }
    else if(input == 'prijs'){
      value.sort((x,y) => {return x.totPrice < y.totPrice ? 1 : -1 } );
    }
    else if(input == 'km'){
      value.sort((x,y) => {return x.kmStand < y.kmStand ? 1 : -1 } );
    }
    return value;
  }



  
}
