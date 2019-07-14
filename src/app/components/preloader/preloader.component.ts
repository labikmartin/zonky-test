import { Component } from '@angular/core';

@Component({
  selector: 'zonky-preloader',
  styleUrls: ['./preloader.component.scss'],
  template: `
    <div class="preloader__wrapper">
      <div class="preloader"></div>
    </div>
  `
})
export class PreloaderComponent {}
