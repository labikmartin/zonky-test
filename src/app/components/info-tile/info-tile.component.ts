import { Component, Input } from '@angular/core';

@Component({
  selector: 'zonky-info-tile',
  styleUrls: ['./info-tile.component.scss'],
  template: `
    <div class="infoTile">
      <div
        class="infoTile__img"
        [ngStyle]="{ 'background-image': 'url(' + image + ')' }"
      ></div>

      <div class="infoTile__title">
        {{ title }}
      </div>

      <div class="infoTile__subtitle">
        {{ subtitle }}
      </div>

      <div class="infoTile__content">{{ content }}</div>
    </div>
  `
})
export class InfoTileComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() content: string;
  @Input() subtitle: string;
}
