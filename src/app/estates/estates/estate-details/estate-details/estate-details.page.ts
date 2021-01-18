import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private readonly httpService: HttpService,
              private readonly activatedRoute: ActivatedRoute,
              private storage: Storage) { }

  public ngOnInit(): void {
    this.estateId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.getEstate(this.estateId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((estate: IEstate) => {
        this.estate = estate;
        this.storage.set('currentEstate', this.estate);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
