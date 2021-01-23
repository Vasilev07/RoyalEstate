import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-estate-map',
  templateUrl: 'estate-map.page.html',
  styleUrls: ['estate-map.page.scss']
})
export class EstateMapPage {
  private estate;

  constructor(private readonly storage: Storage) {}

  public async ionViewDidEnter(): Promise<void> {
    try {
      this.estate = await this.storage.get('currentEstate');
    } catch (error) {
    
    }

  }
}
