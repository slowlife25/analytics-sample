import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAnalyticsService } from 'src/app/services/firebase.analytics.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {

  constructor(
    private nav:       NavController,
    private analytics: FirebaseAnalyticsService
  ) { }

  ngOnInit() {}

  ionViewDidEnter(): void {
    this.analytics.logEvent('viewPage2')
  }

  next() {
    this.analytics.logEvent('ClickConversion')
    this.nav.navigateForward(['/home/finish'])
  }

  back() {
    this.nav.back()
  }

}
