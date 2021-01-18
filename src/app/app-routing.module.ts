import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'estates/:name',
    loadChildren: () => import('./estates/estates/estates.module').then( m => m.EstatesPageModule)
  },
  {
    path: 'estate-details/:id',
    loadChildren: () => import('./estate-details/estate-details/estate-details.module').then( m => m.EstateDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
