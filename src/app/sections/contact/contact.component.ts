import { Component } from '@angular/core';
import contactJson from './../../../assets/json/contact.json';
import { ContactData } from 'src/app/core/modals/contact.modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactData: ContactData = contactJson;

  getContactIcon(category: string): string {
    const map: Record<string, string> = {
      email: 'assets/icons/email-primary-icon.png',
      linkedin: 'assets/icons/linkedin-primary-icon.png',
      github: 'assets/icons/github-primary-icon.png',
      youtube: 'assets/icons/youtube-primary-icon.png',
    };

    return map[category] ?? 'assets/icons/code-icon.png';
  }
}
