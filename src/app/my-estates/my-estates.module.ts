import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyEstatesPage } from './my-estates.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyEstatesRoutingModule } from './my-estates-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MyEstatesRoutingModule,
    HttpClientModule
  ],
  declarations: [MyEstatesPage],
  providers: [HttpClient]
})
export class MyEstatesPageModule {}
