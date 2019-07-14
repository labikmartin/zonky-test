import { Component, Output, EventEmitter } from '@angular/core';
import { RatingsEnum } from './../../models/rating';

@Component({
  selector: 'zonky-risk-rating-selection',
  template: `
    <div
      *ngFor="let rating of enumKeys(ratings)"
      (click)="onLoanRatingChange(rating)"
    >
      {{ ratings[rating] }}
    </div>
  `
})
export class RiskRatingSelectionComponent {
  @Output() onRatingChange = new EventEmitter<RatingsEnum>();

  ratings = RatingsEnum;

  onLoanRatingChange(rating: RatingsEnum) {
    this.onRatingChange.emit(rating);
  }

  enumKeys(o) {
    const keys = o ? Object.keys(o) : [];
    return keys.filter((key: any) => isNaN(key));
  }
}
