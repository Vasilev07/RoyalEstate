import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Storage } from '@ionic/Storage';
import { HttpService } from 'src/app/common/http.service';
import { IEstate } from 'src/app/common/interfaces/estate.interface';

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.page.html',
  styleUrls: ['./estate-details.page.scss'],
})
export class EstateDetailsPage implements OnInit, OnDestroy {
  private estateId: string;
  private estate: IEstate;
  private unsubscribe: Subject<void> = new Subject();
  private city: string;

  constructor(private readonly httpService: HttpService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly storage: Storage,
              private readonly router: Router) { }

  public ngOnInit(): void {
    this.estateId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.getEstate(this.estateId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((estate: IEstate) => {
        this.estate = estate;
        this.storage.set('currentEstate', this.estate);
        
        // sorry for that , was the quickest way
        const addressArray = this.estate.address.split(',');
        this.city = addressArray[addressArray.length - 1].trim();

        this.router.navigate([`/estate-details/${this.estateId}/overview`]);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
