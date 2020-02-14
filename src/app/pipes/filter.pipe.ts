import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( contacts, char: string): any {
    if (char === undefined ) {
      return contacts;
    }
    return contacts.filter(( contacts ) => {

      return contacts.firstName.charAt(0).toLowerCase().includes(char.toLowerCase());

    });

  }

}
