import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEstatesPage } from './my-estates.page';

const routes: Routes = [
  {
    path: '',
    component: MyEstatesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyEstatesRoutingModule {}
