import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceEmail'
})
export class SliceEmailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.substring(0, value.indexOf('@'));
  }
}
