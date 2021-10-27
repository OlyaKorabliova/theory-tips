import { NgModule } from '@angular/core';
import { HttpClientModule } from './modules/http-client.module';
import { RetryModule } from './modules/retry.module';
import { RETRIES } from './tokens/retries.token';

@NgModule({
  imports: [HttpClientModule, RetryModule],
  providers: [
    // rewrites the value in RetryModule, as it is not specified as multi provider
    // as current module provides overwrite those from the imports
    { provide: RETRIES, useValue: 2 },
  ],
})
export class AppModule {}
