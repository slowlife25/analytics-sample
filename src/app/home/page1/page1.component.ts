import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAnalyticsService } from 'src/app/services/firebase.analytics.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {

  constructor(
    private nav:       NavController,
    private analytics: FirebaseAnalyticsService
  ) { }

  ngOnInit() {}

  ionViewDidEnter(): void {
    this.analytics.logEvent('viewPage1')
  }

  next() {
    this.analytics.logEvent('ClickPage2')
    this.nav.navigateForward(['/home/page2'])
  }

  back() {
    this.nav.back()
  }
}
