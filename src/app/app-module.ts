import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Footer } from './components/footer/footer';
import { CarForms } from './components/car-forms/car-forms';
import { CarTable } from './components/car-table/car-table';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    CarForms,
    CarTable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
