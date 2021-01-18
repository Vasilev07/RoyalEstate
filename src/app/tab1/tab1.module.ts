import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1 } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1RoutingModule } from './tab1-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EstateService } from '../common/estate.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1RoutingModule,
    HttpClientModule,
  ],
  declarations: [Tab1],
  providers: [HttpClient, EstateService]
})
export class Tab1PageModule {}
