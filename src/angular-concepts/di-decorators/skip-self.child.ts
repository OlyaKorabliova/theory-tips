import { Component, SkipSelf } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  template: '',
  providers: [ToysService],
})
export class SkipSelfChildComponent {
  constructor(@SkipSelf() private readonly toysService: ToysService) {}
}

/*
  @SkipSelf - takes providers from parent, skipping component's providers
*/
