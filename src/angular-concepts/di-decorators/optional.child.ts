import { Component, Optional } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  providers: [],
})
export class OptionalChildComponent {
  constructor(@Optional() private readonly toysService: ToysService) {}
}

/*
  @Optional - make provider optional, no errors occur when a service is not provided
*/
