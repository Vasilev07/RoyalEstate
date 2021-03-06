import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { filter, map, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/common/http.service';
import { IEstates } from 'src/app/common/interfaces/estates.iterface';

@Component({
  selector: 'app-estates',
  templateUrl: './estates.page.html',
  styleUrls: ['./estates.page.scss'],
})
export class EstatesPage implements OnInit {

  public estates: IEstates[];
  private name: string;

  constructor(private readonly httpService: HttpService,
              private readonly loadingController: LoadingController,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router){}

  private baseUrl = 'https://royalestate-53406-default-rtdb.firebaseio.com/';
  
  public ngOnInit(): void {
    this.showLoadBar();

    this.name = this.activatedRoute.snapshot.paramMap.get('name');

    this.httpService.getEstates()
      .subscribe((estates: IEstates[]) => {
        this.estates = estates.filter((estate) => estate.location.name === this.name);
        this.loadingController.dismiss();
      });
  }

  public onEstateClick(id: string) {
    this.router.navigate(['/estate-details', id]);
  }

  public async showLoadBar() {
    const loading = await this.loadingController.create({
      message: 'Loading Estates...'
    });
    await loading.present();
  }

}
