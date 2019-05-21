import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'workflow-details',
  templateUrl: './workflow-details.component.html',
  styleUrls: ['./workflow-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkflowDetailsComponent {
  color = 'accent';
  checked = false;
  disabled = false;
}
