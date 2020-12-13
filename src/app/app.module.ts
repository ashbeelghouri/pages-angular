import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { ImageStabilizerDirective } from './image-stabilizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    TimesDirective,
    ImageStabilizerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
