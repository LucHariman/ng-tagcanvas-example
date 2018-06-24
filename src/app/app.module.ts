import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TagCanvasModule } from 'ng-tagcanvas';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TagCanvasModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
