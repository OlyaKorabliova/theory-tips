import { NgModule } from '@angular/core';
import { RETRIES } from '../tokens/retries.token';

@NgModule({
  providers: [{ provide: RETRIES, useValue: 3 }],
})
export class RetryModule {}
