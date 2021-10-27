import { InjectionToken } from '@angular/core';

export interface DomainRetryLimit {
  domain: string;
  retries: number;
}

export const DOMAIN_RETRIES = new InjectionToken<DomainRetryLimit>('Retries per domain');
