import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    value.sort((a:any,b:any)=>{
      if(a.name<b.name)
      {
        return -1;
      }
      else if(a.name>b.name)
      {
        return 1;
      }
      else{
        return 0;
      }
    });
    return value;
  }

}
