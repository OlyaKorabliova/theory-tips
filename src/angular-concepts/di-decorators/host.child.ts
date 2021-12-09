import { Component, Host } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  template: '',
  providers: [],
})
export class HostChildComponent {
  constructor(@Host() private readonly toysService: ToysService) {}
}

/*
  @Host - works similarly to @Self, but it can get providers from host component

  There are two common scenarios where said host component
  is something different than our current class:
    1. Child components are defined via @Component
    2. Child component is projected into parent (host) component via <ng-content />
*/
