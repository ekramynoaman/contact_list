import { AddContactComponent } from './../components/add-contact/add-contact.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contacts } from '../interfaces/contacts';
import contacts from '../../assets/contacts.json';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

// new contacts
newContacts: any[] = [];
  constructor() {

    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
    this.newContacts = JSON.parse(savedContacts);
    } else {
    this.newContacts = [];
    }
    console.log(this.newContacts);
}







  getContacts(): Observable<any> {
    return of(contacts).pipe();
}

// Add new contact
addNewContact(userId, email, userName, image, mobilNumber, firstName, lastName,) {
  this.newContacts.push({
    userId,
    email,
    userName,
    image,
    mobilNumber,
    firstName,
    lastName,
  });
  localStorage.setItem('contacts', JSON.stringify(this.newContacts));
  console.log(this.newContacts);

}





}
