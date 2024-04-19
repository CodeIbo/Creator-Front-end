import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(array: any[], dateProperty: string): any[] {
    if (!array || !Array.isArray(array)) {
      return array;
    }
    return _.reverse(
      _.sortBy(array, [(item) => new Date(item[dateProperty]).getTime()])
    );
  }
}
