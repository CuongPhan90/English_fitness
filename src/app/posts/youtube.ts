import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})

export class Youtube implements PipeTransform {
  constructor (private dom: DomSanitizer) {

  }
  transform(value: string, args) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}

