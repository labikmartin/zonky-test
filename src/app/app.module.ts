import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTranslationModule } from './translation/translation.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { LoanDetailGuard } from './guards/loan-detail-guard';

import { RiskRatingSelectionComponent } from './components/risk-rating-selection/risk-rating-selection.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    RiskRatingSelectionComponent,
    PreloaderComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppTranslationModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [LoanDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
