import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'truncarPipe'
})
export class TruncarPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    let limit = args[0]
    return (value.length > limit) ? 
      value.substr(0, limit) + '...':value;
  }

}
