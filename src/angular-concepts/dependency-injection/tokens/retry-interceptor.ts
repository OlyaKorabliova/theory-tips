/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Inject, Injectable, Optional } from '@angular/core';
import { DomainRetryLimit, DOMAIN_RETRIES } from './domain-retries.token';
import { RETRIES } from './retries.token';

@Injectable()
export class RetryInterceptor {
  constructor(
    @Inject(RETRIES) retries: number,

    // if the token is not specified, @Optional() metadata will simply inject null
    // and we will not have an error
    @Optional() @Inject(DOMAIN_RETRIES) domainRetries: DomainRetryLimit[]
  ) {}
}
