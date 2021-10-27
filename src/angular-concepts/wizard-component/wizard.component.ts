import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Step } from './step/step.component';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
})
export class Wizard implements AfterViewInit {
  @ViewChild(Step) step: Step;

  ngAfterViewInit() {
    console.log(this.step);
  }
}
