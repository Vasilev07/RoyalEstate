import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../../../explore-container/explore-container.module';

import { EstateSimilarPage } from './estate-similar.page';

describe('Tab3Page', () => {
  let component: EstateSimilarPage;
  let fixture: ComponentFixture<EstateSimilarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstateSimilarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EstateSimilarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
