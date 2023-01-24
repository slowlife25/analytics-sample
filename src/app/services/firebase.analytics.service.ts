import { Injectable } from '@angular/core';

import { Device }            from '@capacitor/device'
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics'

import { firebaseConfig } from 'src/environments/firebase.analitics.environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAnalyticsService {
  constructor(){
    this.init()
  }

  async init() {
    if ((await (Device.getInfo())).platform === 'web') {
      FirebaseAnalytics.initializeFirebase(firebaseConfig)
    }
  }

  getDeviceInfo() {
    return Device.getInfo()
  }

  logEvent(name: string, params?: Object) {
    FirebaseAnalytics.logEvent({
      name:   name,
      params: !!params ? params : {}
    })
  }
}