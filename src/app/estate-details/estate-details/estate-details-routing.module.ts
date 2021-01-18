import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstateDetailsPage } from './estate-details.page';

const routes: Routes = [
  {
    path: '',
    component: EstateDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstateDetailsPageRoutingModule {}
