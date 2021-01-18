import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { EstateOverviewPage } from './estate-overview.page';

const routes: Routes = [
  {
    path: '',
    component: EstateOverviewPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicStorageModule],
  exports: [RouterModule],
})
export class EstateOverviewRoutingModule {}
