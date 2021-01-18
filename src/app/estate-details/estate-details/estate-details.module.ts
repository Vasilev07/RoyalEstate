import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstateDetailsPageRoutingModule } from './estate-details-routing.module';

import { EstateDetailsPage } from './estate-details.page';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstateDetailsPageRoutingModule,
    IonicStorageModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApDyHfVZbbCjO0O1nf_pgv4YZf8RVqfmA'
    })
  ],
  declarations: [EstateDetailsPage]
})
export class EstateDetailsPageModule {}
