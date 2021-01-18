import { Component} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1 {
  private estate;

  constructor(private storage: Storage) {
    
  }

  public async ionViewDidEnter(): Promise<void> {
    console.log('asdasdasd');

    this.estate = await this.storage.get('currentEstate');
  }
}

