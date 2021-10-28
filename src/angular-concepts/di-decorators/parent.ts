import { Component } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  providers: [ToysService],
})
export class DefaultParentComponent {}
