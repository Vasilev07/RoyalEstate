import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstateOverviewPage } from './estate-overview.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { EstateOverviewRoutingModule } from './estate-overview-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EstateService } from '../../common/estate.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EstateOverviewRoutingModule,
    HttpClientModule,
  ],
  declarations: [EstateOverviewPage],
  providers: [HttpClient, EstateService]
})
export class EstateOverviewPageModule {}
