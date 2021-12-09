/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Inject, NgModule } from '@angular/core';
import { RETRIES } from '../tokens/retries.token';

@NgModule({
  providers: [
    { provide: RETRIES, useValue: 3, multi: true },
    { provide: RETRIES, useValue: 5, multi: true },
  ],
})
export class RetriesModule {
  constructor(@Inject(RETRIES) retries: string[]) {}
}
