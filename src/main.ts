import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './app/_helpers/auth.interceptor';

bootstrapApplication(AppComponent, {
    ...appConfig, // Include existing app configuration
    providers: [
        ...(appConfig.providers || []), // Merge existing providers from appConfig
        provideHttpClient(withInterceptors([AuthInterceptor])) // Register interceptor
    ],
}).catch((err) => console.error(err));
