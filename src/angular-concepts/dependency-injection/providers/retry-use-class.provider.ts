import { NgModule } from '@angular/core';
import { RetryService } from './services/retry.service';
import { TimeoutRetryService } from './services/timeout-retry.service';

@NgModule({
  providers: [
    // 1st instance of TimeoutRetryService is created
    TimeoutRetryService,

    // 2nd instance of TimeoutRetryService is created
    { provide: RetryService, useClass: TimeoutRetryService },
  ],
})
export class RetryModule {}

/*
  INFO:

  The 1st provider provides it with itself,
  while 2nd provider says to provide a different
  token of the TimeoutRetryService that creates one more instance.

  It can be a problem because, depending on which token you use to inject it,
  you get different instances of the same service.
  If the service is stateful, it will cause different versions in different places
  that don't work together.
*/
