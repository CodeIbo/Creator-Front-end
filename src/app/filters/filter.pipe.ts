import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogFilter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any, searchValue: string, valuesToSearch: string[]) {
    if (!searchValue) return data;

    return data.filter((v: any) => {
      return valuesToSearch.some((dataName) => {
        return v[dataName].toString().toLowerCase().indexOf(searchValue) > -1;
      });
    });
  }
}
