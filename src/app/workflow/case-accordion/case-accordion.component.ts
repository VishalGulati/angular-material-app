import { Component } from '@angular/core';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'case-accordion',
  templateUrl: './case-accordion.component.html',
  styleUrls: ['./case-accordion.component.scss']
})
export class CaseAccordionComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
