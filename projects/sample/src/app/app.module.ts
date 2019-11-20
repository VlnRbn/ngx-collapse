import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCollapseModule } from 'ngx-collapse';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
