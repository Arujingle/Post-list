import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postPrefix'
})
export class PostPrefixPipe implements PipeTransform {

  transform(value: any, isDone: boolean): any {
    if (isDone === true) {
      return value ? `${value}` : '';
    }
  }

}
