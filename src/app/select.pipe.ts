import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(!args)
    return value;
    else if(args=="characters"){
      return value.filter(it=>{
        if(it.gender)
        return it;
      });
    }
    else if(args=="houses"){
      return value.filter(it=>{
        if(it.region)
        return it;
      });
    }
    else {
      return value.filter(it=>{
        if(it.isbn)
        return it;
      });
    }
  }

}
