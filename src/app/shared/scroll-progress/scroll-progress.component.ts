import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.scss'],
})
export class ScrollProgressComponent {
  progress = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    this.progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
  }
}
