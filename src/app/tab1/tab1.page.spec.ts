import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1 } from './tab1.page';

describe('MyEstatesPage', () => {
  let component: Tab1;
  let fixture: ComponentFixture<Tab1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
