import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstateSimilarPage } from './estate-similar.page';
import { ExploreContainerComponentModule } from '../../../../explore-container/explore-container.module';

import { EstateSimilarPageRoutingModule } from './estate-similar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: EstateSimilarPage }]),
    EstateSimilarPageRoutingModule,
  ],
  declarations: [EstateSimilarPage]
})
export class EstateSimilarPageModule {}
