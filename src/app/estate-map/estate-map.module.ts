import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstateMapPage } from './estate-map.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EstateMapPageRoutingModule } from './estate-map-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EstateMapPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApDyHfVZbbCjO0O1nf_pgv4YZf8RVqfmA'
    })
  ],
  declarations: [EstateMapPage]
})
export class EstateMapPageModule {}
