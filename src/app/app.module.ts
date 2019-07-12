import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTranslationModule } from './translation/translation.module';

@NgModule({
  declarations: [AppComponent, routedComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppTranslationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
