import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BadAuthRetryService } from './services/bad-auth-retry.service';
import { RetryService } from './services/retry.service';

@NgModule({
  providers: [
    {
      provide: RetryService,
      useFactory: (authService: AuthService) => new BadAuthRetryService(authService.getToken()),
      deps: [AuthService],
    },
  ],
})
export class RetryModule {}
