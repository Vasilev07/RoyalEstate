import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { Tab1 } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicStorageModule],
  exports: [RouterModule],
})
export class Tab1RoutingModule {}
