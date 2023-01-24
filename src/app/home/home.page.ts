import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { FirebaseAnalyticsService } from '../services/firebase.analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private nav:       NavController,
    private analytics: FirebaseAnalyticsService
  ) {}

  onClick(): void {
    this.nav.navigateForward(['/home/page1'])
  }

  logEvent() {
    const param = {
      custom_param1: 'male',
      custom_param2: '20-30',
    }
    this.analytics.logEvent('MainPageEvent', param)
  }

}
