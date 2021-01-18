import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EstateMapPage } from './estate-map.page';

describe('EstateMapPage', () => {
  let component: EstateMapPage;
  let fixture: ComponentFixture<EstateMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstateMapPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EstateMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
