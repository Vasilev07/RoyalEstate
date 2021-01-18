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
        loadChildren: () => import('../../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../../tab2/tab2.module').then( m => m.Tab2PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstateDetailsPageRoutingModule {}
