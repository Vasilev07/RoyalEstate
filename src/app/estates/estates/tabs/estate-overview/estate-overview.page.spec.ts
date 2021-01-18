import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../../../explore-container/explore-container.module';

import { EstateOverviewPage } from './estate-overview.page';

describe('MyEstatesPage', () => {
  let component: EstateOverviewPage;
  let fixture: ComponentFixture<EstateOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstateOverviewPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EstateOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
