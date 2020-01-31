import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contacts } from '../interfaces/contacts';
import contacts from 'src/assets/contacts.json';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<any> {
    return of(contacts).pipe(

    );
}


}
