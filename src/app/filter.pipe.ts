import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchtext: string): any {
    if(!searchtext)
    return value;
    return value.filter(it=>{
      return it.name.toLowerCase().includes(searchtext.toLowerCase());
    });
  }

}
