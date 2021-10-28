import { Component, Self } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  providers: [ToysService],
})
export class SelfChildComponent {
  constructor(@Self() private readonly toysService: ToysService) {}
}

/*
  @Self - the only place allowed to find the injector is the component itself
        - if component doesn't have provider -> an error occurs
*/
