import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import recent from 'src/assets/recent-contact.json';

@Injectable({
  providedIn: 'root'
})
export class RecentContactsService {

  constructor() { }
  // Get recent Contacts from json file
  getRecentContacts(): Observable<any> {
    return of(recent).pipe();
  }
}
