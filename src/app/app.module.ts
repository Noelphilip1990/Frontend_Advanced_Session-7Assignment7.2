import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HighlightDirective } from './Highlight';

import { AppComponent } from './app.component';
import { InfouserComponent } from './infouser/infouser.component';
import { routing } from './app.router';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    InfouserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
