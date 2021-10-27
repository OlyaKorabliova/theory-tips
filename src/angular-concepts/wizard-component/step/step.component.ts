import { Component } from '@angular/core';
import { Wizard } from '../wizard.component';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
})
export class Step {
  constructor(wizard: Wizard) {
    wizard.registerStep(this);
  }
}
