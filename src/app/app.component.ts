import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zonky-test';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('cs');
    this.translate.use('cs');
  }

  ngOnInit() {}
}
