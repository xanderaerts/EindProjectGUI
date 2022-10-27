import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addLiters',
})
export class AddLitersPipe implements PipeTransform {

  transform(value : number): any {
    if(!value){
      return null;
    }

    var str = value.toString();

    return str + "L";

  }

}
