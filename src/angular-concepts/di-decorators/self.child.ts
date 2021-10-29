import { Component, Self } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  template: '',
  providers: [ToysService],
})
export class SelfChildComponent {
  constructor(@Self() private readonly toysService: ToysService) {}
}

/*
  @Self - the only place allowed to find the injector is the component itself
        - if component doesn't have provider -> an error occurs
*/
