import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RatingsEnum } from './../../models/rating';

@Component({
  selector: 'zonky-risk-rating-selection',
  styleUrls: ['./risk-rating-selection.component.scss'],
  template: `
    <div class="flexGrid riskRatingWrapper">
      <div
        *ngFor="let rating of enumKeys(ratings)"
        (click)="onLoanRatingChange(rating)"
        [class]="'riskRating__' + rating"
        [ngClass]="{ selected: rating === selectedRating }"
        class="riskRating"
      >
        {{ ratings[rating] | number: null:'cs' }} %
      </div>
    </div>
  `
})
export class RiskRatingSelectionComponent {
  @Input() selectedRating: RatingsEnum;
  @Output() onRatingChange = new EventEmitter<RatingsEnum>();

  ratings = RatingsEnum;

  onLoanRatingChange(rating: RatingsEnum) {
    if (rating === this.selectedRating) {
      return;
    }

    this.onRatingChange.emit(rating);
  }

  enumKeys(o) {
    const keys = o ? Object.keys(o) : [];
    return keys.filter((key: any) => isNaN(key));
  }
}
