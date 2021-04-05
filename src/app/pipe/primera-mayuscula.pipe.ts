import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraMayuscula'
})
export class PrimeraMayusculaPipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
  }

}
