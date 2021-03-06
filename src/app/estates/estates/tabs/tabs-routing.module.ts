import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./estate-overview/estate-overview.module').then(m => m.EstateOverviewPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./estate-map/estate-map.module').then(m => m.EstateMapPageModule)
      },
      {
        path: 'similar',
        loadChildren: () => import('./estate-similar/estate-similar.module').then(m => m.EstateSimilarPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
