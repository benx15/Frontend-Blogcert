import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter , withComponentInputBinding,RouteReuseStrategy} from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

class NoReuseStrategy implements RouteReuseStrategy {
  shouldDetach(): boolean {
    return false;
  }

  store(): void {}

  shouldAttach(): boolean {
    return false;
  }

  retrieve(): any {
    return null;
  }

  shouldReuseRoute(): boolean {
    return false;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes ,withComponentInputBinding()),
    { provide: RouteReuseStrategy, useClass: NoReuseStrategy },
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
};
