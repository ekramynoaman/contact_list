import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import recent from 'src/assets/recent-contact.json';

@Injectable({
  providedIn: 'root'
})
export class RecentContactsService {

  constructor(private http: HttpClientModule) { }

  getRecentContacts (): Observable<any> {
    return of(recent).pipe();
  }
}
