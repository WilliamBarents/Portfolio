import { Component } from '@angular/core';
import workJson from './../../../assets/json/work.json';
import { WorkSite } from 'src/app/core/modals/work-types.modals';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss'],
})
export class ContributionsComponent {
  workJson: WorkSite[] = workJson;
}
