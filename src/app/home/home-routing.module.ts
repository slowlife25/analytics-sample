import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversionComponent }  from './conversion/conversion.component';
import { HomePage }             from './home.page';
import { Page1Component }       from './page1/page1.component';
import { Page2Component }       from './page2/page2.component';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component,
  }, {
    path: 'page2',
    component: Page2Component,
  }, {
    path: 'finish',
    component: ConversionComponent,
  }, {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
