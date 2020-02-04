import { RecentContactsService } from './../../services/recent-contacts.service';
import { Observable } from 'rxjs';
import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/interfaces/contacts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any = [];
  recentContacts: any = [];

  // Array of Alphabet
  chars: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'U', 'W', 'X', 'Y', 'Z'];

  // letter for search
  letter: string;

  img = '../../assets/avatar.png';


  constructor(private contactsSer: ContactsService, private recent: RecentContactsService) {
    // Get all contacts
    this.contactsSer.getContacts().subscribe(data => {
      this.contacts = data.data;
      console.table(this.contacts);
      this.contacts = this.contacts.concat(this.contactsSer.newContacts);
      console.table(this.contacts);

      });
    // Get recent contacts
    this.recent.getRecentContacts().subscribe(data => {
      this.recentContacts = data.data;
      console.table(this.recentContacts);
      });

      // add new contact


   }

  // filterContacts () {

  // }

  ngOnInit() {


}



}
/* todo
- category by click bay scroll with sort


*/
