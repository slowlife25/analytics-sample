import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseAnalyticsService } from 'src/app/services/firebase.analytics.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss'],
})
export class ConversionComponent implements OnInit {

  constructor(
    private nav:       NavController,
    private analytics: FirebaseAnalyticsService
  ) { }

  ngOnInit() {}

  ionViewDidEnter(): void {
    this.analytics.logEvent('viewLoginPage')
  }

  login() {
    this.analytics.logEvent('login')
  }

  back() {
    this.nav.back()
  }

}
