import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private estates;
  constructor(private readonly storage: Storage) { }

  public async ngOnInit(): Promise<void> {
    try {
      this.estates = await this.storage.get('savedEstate');
      console.log(this.estates);
    } catch (error) {
      
    }
  }

}
