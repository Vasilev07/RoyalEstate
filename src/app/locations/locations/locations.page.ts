import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  private baseUrl = 'https://royalestate-53406-default-rtdb.firebaseio.com/';
  private locations: any;
  private unsubscribe: Subject<any> = new Subject();

  constructor(private readonly http: HttpClient,
              private readonly loadingController: LoadingController,
              private readonly router: Router) { }

  public ngOnInit() {
      // this.showLoadBar();

      this.http.get(`${this.baseUrl}/locations.json`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((locations) => {
        this.locations = locations;
        // this.loadingController.dismiss();
        console.log(this.locations);
    });
    // this.loadingController.dismiss();
  }

  public locationClick(name: string) {
    this.router.navigate(['/estates', name]);
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public async showLoadBar() {
    const loading = await this.loadingController.create({
      message: 'Loading Locations...'
    });
    await loading.present();
  }
}
