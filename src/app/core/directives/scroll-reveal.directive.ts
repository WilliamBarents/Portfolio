import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() threshold = 0.1;
  @Input() rootMargin = '0px 0px -50px 0px';
  @Input() triggerOnce = true;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      this.renderer.addClass(this.el.nativeElement, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'is-visible');

          if (this.triggerOnce) {
            this.observer?.disconnect();
          }
        } else if (!this.triggerOnce) {
          this.renderer.removeClass(this.el.nativeElement, 'is-visible');
        }
      },
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin,
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
