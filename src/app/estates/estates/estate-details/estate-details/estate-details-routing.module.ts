import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstateDetailsPage } from './estate-details.page';

const routes: Routes = [
  {
    path: '',
    component: EstateDetailsPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('../../../../tabs/estate-overview/estate-overview.module').then( m => m.EstateOverviewPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../../../../tabs/estate-map/estate-map.module').then( m => m.EstateMapPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstateDetailsPageRoutingModule {}
