import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstateSimilarPage } from './estate-similar.page';

const routes: Routes = [
  {
    path: '',
    component: EstateSimilarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstateSimilarPageRoutingModule {}
