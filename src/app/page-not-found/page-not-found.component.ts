import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-page-not-found',
	styleUrl: './page-not-found.component.less',
	templateUrl: './page-not-found.component.html',

	standalone: true,

	imports: [RouterModule],
})
export class PageNotFoundComponent {}
