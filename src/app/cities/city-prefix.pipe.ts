import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityPrefix'
})
export class CityPrefixPipe implements PipeTransform {

  transform(value: string, type: string): string {
    let val;
    switch (type) {
      case 'oblast':
        val = 'r. ';
        break;
      case 'capital':
        val = 'p.';
        break;
      case 'city':
        val = 'g.';
        break;
    }
    return value ? `${val} ${value}` : '';
  }
}
