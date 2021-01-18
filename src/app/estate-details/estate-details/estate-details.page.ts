import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EstateService } from 'src/app/common/estate.service';
import { HttpService } from 'src/app/common/http.service';

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.page.html',
  styleUrls: ['./estate-details.page.scss'],
})
export class EstateDetailsPage implements OnInit, OnDestroy {
  private estateId: string;
  private estate: any;
  private unsubscribe = new Subject();

  constructor(private readonly httpService: HttpService,
              private readonly activatedRoute: ActivatedRoute,
              private storage: Storage) { }

  public ngOnInit(): void {
    this.estateId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.getEstate(this.estateId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((estate) => {
        this.estate = estate;
        console.log("SHOULD BE SENT", estate);
        this.storage.set('currentEstate', this.estate);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
