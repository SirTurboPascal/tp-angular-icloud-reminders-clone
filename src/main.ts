import { bootstrapApplication } from '@angular/platform-browser';
import { TitleStrategy, provideRouter } from '@angular/router';

import routes from './app/routes';

import { AppComponent } from './app/app.component';
import { AppTitleStrategy } from './app/title-strategy';

bootstrapApplication(AppComponent, {
	providers: [{ provide: TitleStrategy, useClass: AppTitleStrategy }, provideRouter(routes)],
}).catch((err) => console.error(err));
