import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpService } from 'src/app/common/http.service';
import { ILocation } from 'src/app/common/interfaces/locations.interface';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  private locations: ILocation[] = [];
  private unsubscribe: Subject<void> = new Subject();

  constructor(private readonly httpService: HttpService,
              private readonly loadingController: LoadingController,
              private readonly router: Router) { }

  public ngOnInit(): void {
      this.showLoadBar();

      this.httpService.getLocations()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((locations: ILocation[]) => {
        this.locations = locations;
        this.loadingController.dismiss();
    });
  }

  public locationClick(name: string): void {
    this.router.navigate(['/estates', name]);
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public async showLoadBar(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Loading Locations...'
    });
    await loading.present();
  }

  public onBackClicked(): void {
    this.router.navigate(['/']);
  }
}
