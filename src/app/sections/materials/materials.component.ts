import { Component } from '@angular/core';
import materialsJson from './../../../assets/json/materials.json';
import {
  MaterialItem,
  MaterialsData,
} from 'src/app/core/modals/material.modal';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
})
export class MaterialsComponent {
  data: MaterialsData = materialsJson;

  get materials(): MaterialItem[] {
    return this.data.items;
  }
}
