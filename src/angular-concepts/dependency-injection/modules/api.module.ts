import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { RetryModule } from './retry.module';

@NgModule({
  providers: [ApiService],
  imports: [RetryModule.customizeDomain('example.com', 5)],
})
export class ApiModule {}

/*
  INFO: initial way to set the DOMAIN_RETRIES provider

  @NgModule({
    providers: [
      ApiService,
      {
        provide: DOMAIN_RETRIES,
        useValue: { domain: 'example.com', retries: 5 },
        multi: true,
      },
    ],
  })
  export class ApiModule {}
*/
