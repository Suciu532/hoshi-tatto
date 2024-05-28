import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';


// Since Angular 17 uses a functional approach, we declare the components directly.
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      CommonModule 
    )
  ]
};

