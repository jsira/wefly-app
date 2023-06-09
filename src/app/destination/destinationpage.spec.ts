import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DestinationPage } from './destination.page';

describe('DestinationPage', () => {
  let component: DestinationPage;
  let fixture: ComponentFixture<DestinationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinationPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
