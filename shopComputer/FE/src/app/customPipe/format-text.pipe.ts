import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(x: number): string {
    return new Intl.NumberFormat(`de-DE`,{style:'currency',currency:'VND'}).format(x);
  }
}
