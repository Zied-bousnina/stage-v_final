import { NgModule } from '@angular/core';
import { FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    LayoutsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
