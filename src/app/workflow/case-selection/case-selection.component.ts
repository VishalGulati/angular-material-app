import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'case-selection',
  templateUrl: './case-selection.component.html',
  styleUrls: ['./case-selection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CaseSelectionComponent {
  selected = '';
}
