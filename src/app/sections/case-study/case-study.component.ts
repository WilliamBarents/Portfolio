import { Component } from '@angular/core';
import caseStudy from './../../../assets/json/case-study.json';
import { CaseStudyData } from 'src/app/core/modals/case-study.modal';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss'],
})
export class CaseStudyComponent {
  caseStudyJson: CaseStudyData = caseStudy;

  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}
