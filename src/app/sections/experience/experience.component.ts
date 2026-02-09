import { Component } from '@angular/core';
import experienceJson from './../../../assets/json/experience.json';
import { Experience } from 'src/app/core/modals/experience.modal';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experienceJson: Experience[] = experienceJson;
}
