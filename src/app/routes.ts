import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ component: HomeComponent, path: '', title: 'Home' },
	{ component: PageNotFoundComponent, path: '**', title: 'Page Not Found!' },
];

export default routes;
