import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstateDetailsPageRoutingModule } from './estate-details-routing.module';

import { EstateDetailsPage } from './estate-details.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstateDetailsPageRoutingModule,
    IonicStorageModule
  ],
  declarations: [EstateDetailsPage]
})
export class EstateDetailsPageModule {}
