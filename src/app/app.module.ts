import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContributionsComponent } from './sections/contributions/contributions.component';
import { ZyneeraComponent } from './sections/zyneera/zyneera.component';
import { ContactComponent } from './sections/contact/contact.component';
import { VideosComponent } from './sections/videos/videos.component';
import { MaterialsComponent } from './sections/materials/materials.component';
import { ScrollProgressComponent } from './shared/scroll-progress/scroll-progress.component';
import { ScrollRevealDirective } from './core/directives/scroll-reveal.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContributionsComponent,
    ZyneeraComponent,
    ContactComponent,
    VideosComponent,
    MaterialsComponent,
    ScrollProgressComponent,
    ScrollRevealDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
