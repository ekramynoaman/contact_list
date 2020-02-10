import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform( contacts, letter: string): any {
    if (letter === undefined ) {
      return contacts;
    }
    return contacts.filter(( contacts ) => {

      return contacts.firstName.charAt(0).toLowerCase().includes(letter.toLowerCase());

    });

  }

}
