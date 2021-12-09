/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Self } from '@angular/core';
import { DOMAIN_RETRIES } from '../tokens/domain-retries.token';
import { RETRIES } from '../tokens/retries.token';

@NgModule({
  providers: [
    /* providers for any injector */
    // { provide: 'HTTP_INTERCEPTOR', useClass: RetryInterceptor, multi: true },
    // { provide: RETRIES, useValue: 3 },
  ],
})
export class RetryModule {
  // HttpInterceptors only work if HttpClient is in the same injector

  // @Self() validates that HttpClient exists in the same injector
  // It refers to the current injector and doesn't go up the hierarchy
  constructor(@Self() client: HttpClient) {}

  static withRetries(defaultRetries: number): ModuleWithProviders<RetryModule> {
    return {
      ngModule: RetryModule,
      providers: [{ provide: RETRIES, useValue: defaultRetries }],
    };
  }

  static customizeDomain(
    domain: string,
    retries: number
  ): ModuleWithProviders<RetryModule> {
    return {
      ngModule: RetryModule,
      providers: [
        { provide: DOMAIN_RETRIES, useValue: { domain, retries }, multi: true },
      ],
    };
  }

  // forRoot should only be imported into the AppModule
  static forRoot(): ModuleWithProviders<RetryModule> {
    return {
      ngModule: RetryModule,
      providers: [
        /* providers only for the app injector */
      ],
    };
  }
}
