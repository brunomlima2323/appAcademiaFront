import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideAnimations(),
    provideToastr({
      timeOut: 7000,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    }),
    provideHttpClient(
      withInterceptors([authInterceptor]) // <-- Aqui você adiciona o interceptor
    )
  ]
}).catch(err => console.error(err));
