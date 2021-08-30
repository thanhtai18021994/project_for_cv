import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}
