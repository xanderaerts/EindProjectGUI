import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addKm'
})
export class AddKmPipe implements PipeTransform {
  
  transform(value : number): any {
    if(!value){
      return null;
    }

    var str = value.toString();

    return str + "km";

  }
}
