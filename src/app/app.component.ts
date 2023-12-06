import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	styleUrl: './app.component.less',
	templateUrl: './app.component.html',

	standalone: true,

	imports: [CommonModule, RouterOutlet],
})
export class AppComponent {}
