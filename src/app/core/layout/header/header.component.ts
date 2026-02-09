import { Component, OnDestroy, OnInit } from '@angular/core';
import contactJson from './../../../../assets/json/contact.json';
import { NavSection } from '../../modals/navigation.modal';
import { ScrollService } from '../../services/scroll.service';
import navJson from './../../../../assets/json/navigation.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  navigationData = navJson;
  contactData = contactJson;

  menuOpen = false;
  activeSection: NavSection = 'about';

  navItems: { id: NavSection; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'contributions', label: 'Work' },
    { id: 'videos', label: 'Videos' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'zyneera', label: 'Zyneera' },
    { id: 'materials', label: 'Materials' },
    { id: 'contact', label: 'Contact' },
  ];

  constructor(private scrollService: ScrollService) {}

  /* 🔑 THIS IS THE MISSING PIECE */
  ngOnInit(): void {
    this.scrollService.init(
      this.navItems.map((item) => item.id),
      (section) => {
        this.activeSection = section;
      },
    );
  }

  ngOnDestroy(): void {
    this.scrollService.destroy();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onNavClick(id: NavSection): void {
    this.activeSection = id;

    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    this.menuOpen = false;
  }

  getContactIcon(category: string): string {
    const map: Record<string, string> = {
      email: 'assets/icons/email-icon.png',
      linkedin: 'assets/icons/linkedin-icon.png',
      github: 'assets/icons/github-icon.png',
      youtube: 'assets/icons/youtube-icon.png',
    };

    return map[category] ?? 'assets/icons/code-icon.png';
  }
}
