import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taiwanDate'
})
export class TaiwanDatePipe implements PipeTransform {

  transform(date: number | Date): string {
    if(typeof date === 'number'){
      const taiwanDate = date.toString();
      return `${taiwanDate.substr(0, taiwanDate.length-4)}/${taiwanDate.substr(-4, 2)}/${taiwanDate.substr(-2)}`;
    }else{
      const year = date.getFullYear() - 1911;
      return `${year}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  }

}
