import { Component, OnInit } from '@angular/core';
import { fade } from './../../animations/animations';
import { RecentContactsService } from './../../services/recent-contacts.service';
import { ContactsService } from './../../services/contacts.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade]
})
export class HomeComponent implements OnInit {

  // Contacts array
  contacts: any = [];

  // Contacts array
  recentContacts: any = [];

  // Array of Alphabet catagories
  chars: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'U', 'W', 'X', 'Y', 'Z'
  ];

  // letter for search
  letter: string;

  // for static img
  img = '../../assets/avatar.png';

  constructor(private contactsSer: ContactsService, private recent: RecentContactsService) {
    // Get all contacts
    this.contactsSer.getContacts().subscribe(data => {
      this.contacts = data.data;


      // Add new contacts to all contacts array
      this.contacts = this.contacts.concat(this.contactsSer.newContacts);


      });

    // Get Latest contacts
    this.recent.getRecentContacts().subscribe(data => {
      this.recentContacts = data.data;
      });

   }

  ngOnInit() {


  }



}

