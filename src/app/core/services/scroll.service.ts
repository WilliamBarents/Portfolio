import { Injectable, NgZone } from '@angular/core';
import { NavSection } from '../modals/navigation.modal';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private observer!: IntersectionObserver;
  private callback!: (section: NavSection) => void;

  constructor(private zone: NgZone) {}

  init(sections: NavSection[], onChange: (id: NavSection) => void) {
    this.callback = onChange;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.zone.run(() => {
              this.callback(entry.target.id as NavSection);
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  destroy() {
    this.observer?.disconnect();
  }
}
