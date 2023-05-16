import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArray',
  pure: true,
  standalone: true
})
export class NumToArrayPipe implements PipeTransform {

  transform(value: number | undefined | null): unknown[] {
    return new Array(value ?? 0);
  }

}
