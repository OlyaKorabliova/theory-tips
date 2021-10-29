import { Component } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  template: '',
  providers: [ToysService],
})
export class DefaultChildComponent {
  constructor(private readonly toysService: ToysService) {}
}

/*
  ToysService is taken from component's providers list
  If there is no provider, search goes further in the hierarchy tree
*/
