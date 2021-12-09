import { NgModule } from '@angular/core';
import { RetryService } from './services/retry.service';
import { TimeoutRetryService } from './services/timeout-retry.service';

@NgModule({
  providers: [
    // 1st instance of TimeoutRetryService is created
    TimeoutRetryService,

    // 2nd instance of TimeoutRetryService is reused (aliased)
    { provide: RetryService, useExisting: TimeoutRetryService },
  ],
})
export class RetryModule {}

/*
  INFO:

  In this example there won't be such problem as with useClass,
  as it creates only one instance of the TimeoutRetryService
  and reuses the existing instance in other places to provide.

  This is way is a lot safer to do.
*/
