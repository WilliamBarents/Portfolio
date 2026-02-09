import { Component } from '@angular/core';
import skillsJson from './../../../assets/json/skills.json';
import { SkillCategory } from 'src/app/core/modals/modals.modal';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillsData: SkillCategory[] = skillsJson.skills;

  getCategoryIcon(category: string): string {
    const map: Record<string, string> = {
      Frontend: 'assets/icons/code-icon.png',
      'Backend & Services': 'assets/icons/database-icon.png',
      'Tools & Platforms': 'assets/icons/tools-icon.png',
    };

    return map[category] ?? 'assets/icons/code-icon.png';
  }
}
