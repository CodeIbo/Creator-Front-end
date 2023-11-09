import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue: string): any {
    if (!searchValue) return value;
    return value.filter((v:any) => v.post_name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.meta_data_description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) 
  }

}
