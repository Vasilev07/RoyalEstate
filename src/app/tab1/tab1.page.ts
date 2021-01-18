import { Component} from '@angular/core';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1 {
  private estate;
  public isSaved: boolean = false;

  constructor(private storage: Storage) {
    
  }

  public async ionViewDidEnter(): Promise<void> {
    try {
      this.estate = await this.storage.get('currentEstate');
      
    } catch (error) {
      this.isSaved = false;
    }

  }

  public onSaveButtonClick(): void {
    this.isSaved = true;
    this.storage.set('savedEstate', this.estate);
  }

  public onRemoveButtonClicked(): void {
    this.isSaved = false;
    this.storage.remove('savedEstate');
  }
}

