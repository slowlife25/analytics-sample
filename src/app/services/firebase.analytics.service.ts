import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';

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

  setUerId(userId: string) {
    FirebaseAnalytics.setUserId({
      userId: userId
    })
  }

  setUserProperty(name: string, value: string): void {
    FirebaseAnalytics.setUserProperty({
      name: name,
      value: value
    })   
  }

  getAppInstanceId() {
    return FirebaseAnalytics.getAppInstanceId()
  }

  setScreenName(router: Router): void {
    FirebaseAnalytics.setScreenName({
      screenName: router.url
    })
  }

  logEvent(name: string, params?: Object) {
    FirebaseAnalytics.logEvent({
      name:   name,
      params: !!params ? params : {}
    })
  }
}