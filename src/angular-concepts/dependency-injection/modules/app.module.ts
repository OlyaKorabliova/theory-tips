import { NgModule } from '@angular/core';
import { HttpClientModule } from './http-client.module';
import { RetryModule } from './retry.module';

@NgModule({
  imports: [
    HttpClientModule,
    RetryModule.withRetries(2),

    // marks providers as app-level
    // WARN: should not be imported in LazyModule
    RetryModule.forRoot(),
  ],
})
export class AppModule {}
