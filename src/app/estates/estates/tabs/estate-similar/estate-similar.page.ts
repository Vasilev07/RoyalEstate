import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/common/http.service';
import { IEstate } from 'src/app/common/interfaces/estate.interface';
import { IEstates } from 'src/app/common/interfaces/estates.iterface';

@Component({
  selector: 'app-estate-similar',
  templateUrl: 'estate-similar.page.html',
  styleUrls: ['estate-similar.page.scss']
})
export class EstateSimilarPage implements OnInit {
  private filterType: string;
  private estateId: string;
  private estate: IEstate;
  private estates: IEstates[];
  public filteredEstates: IEstate[];
  public estateTypes: string[] = ['House', 'Apartment', 'Studio'];

  constructor(private readonly httpService: HttpService,
              private readonly router: Router) {}

  public ngOnInit(): void {
    this.estateId = this.router.url.split('/')[2];

    this.httpService.getEstate(this.estateId)
    .subscribe((estate: IEstate) => {
      this.estate = estate;
    });

    this.httpService.getEstates().subscribe((estates: IEstates[]) => {
     this.estates = estates;
     this.filteredEstates = this.filterByRegion() as any; 
     console.log(this.filteredEstates);
    });
  }

  public segmentChanged(event: CustomEvent): void {
    this.filterType = event.detail.value; 
    console.log(event);
    if (this.filterType === 'Region') {
      this.filteredEstates = this.filterByRegion() as any;
      console.log(this.filterByRegion);
    } else {
      // do else
    }
  }

  public onEstateViewClick(estate: IEstate) {
    this.router.navigate([`/estate-details/${estate.id}/overview`]);
  }

  private filterByRegion(): IEstate[] {
      const onlyEstates = this.estates.map((est) => est.estates).flat();
      const filterData = onlyEstates.filter((estate) => estate.region === this.estate.region);

      return filterData;
  }
}
