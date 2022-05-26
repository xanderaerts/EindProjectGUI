import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addEuro'
})
export class AddEuroPipe implements PipeTransform {

  transform(value : number): any {
    if(!value){
      return null;
    }

    var str = value.toString();

    return "€" + str;

  }

}
