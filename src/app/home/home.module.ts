import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';
import { ConversionModule } from './conversion/conversion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Page1Module,
    Page2Module,
    ConversionModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
