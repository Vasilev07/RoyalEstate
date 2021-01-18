import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private estate;

  constructor(private readonly storage: Storage) {}

  public async ionViewDidEnter(): Promise<void> {
    try {
      this.estate = await this.storage.get('currentEstate');
      console.log(this.estate);
    } catch (error) {
    
    }

  }
}
