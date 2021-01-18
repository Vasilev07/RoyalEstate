import { Component} from '@angular/core';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-estate-overview',
  templateUrl: 'estate-overview.page.html',
  styleUrls: ['estate-overview.page.scss']
})
export class EstateOverviewPage {
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

