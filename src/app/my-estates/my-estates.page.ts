import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-estates',
  templateUrl: 'my-estates.page.html',
  styleUrls: ['my-estates.page.scss']
})
export class MyEstatesPage {
  private baseUrl = 'https://royalestate-53406-default-rtdb.firebaseio.com/';

  constructor(private readonly http: HttpClient) {}

  public ionViewDidLoad(): void {
    console.log('loaded');
    this.http.get(`${this.baseUrl}/locations-data.json`).subscribe((locations) => {
      console.log(locations);
      return locations;
    });
    
  }

  public ionViewDidEnter(): void {
    console.log('loaded 2');
    this.http.get(`${this.baseUrl}/locations-data.json`).subscribe((locations) => {
      console.log(locations);
      return locations;
    });
  }
}

