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
  private estates = [];
  constructor(private storage: Storage) {
    
  }

  public async ionViewDidEnter(): Promise<void> {
    try {
      this.estate = await this.storage.get('currentEstate');
      this.estates = [...await this.storage.get('savedEstate')];
      console.log('estates', this.estates);
    } catch (error) {
      this.isSaved = false;
    }

  }

  public onSaveButtonClick(): void {
    this.isSaved = true;
    this.estates = [...this.estates, this.estate];
    this.storage.set('savedEstate', this.estates);
  }

  public onRemoveButtonClicked(): void {
    this.isSaved = false;
    this.storage.remove('savedEstate');
  }
}

