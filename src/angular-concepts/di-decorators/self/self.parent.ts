import { Component } from '@angular/core';
import { ToysService } from '../toys.service';

@Component({
  providers: [ToysService],
})
export class SelfParentComponent {
  constructor(private readonly toysService: ToysService) {}
}
