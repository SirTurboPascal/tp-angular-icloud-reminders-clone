import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { isUndefined } from 'lodash';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
	private title: Title;

	public constructor(title: Title) {
		super();

		this.title = title;
	}

	override updateTitle(routerStateSnapshot: RouterStateSnapshot): void {
		const title: string | undefined = this.buildTitle(routerStateSnapshot);

		if (!isUndefined(title)) {
			this.title.setTitle(`iCloud Reminders Clone | ${title}`);
		}
	}
}
