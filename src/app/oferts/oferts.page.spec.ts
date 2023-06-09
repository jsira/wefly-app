import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OfertsPage } from './oferts.page';

describe('OfertsPage', () => {
  let component: OfertsPage;
  let fixture: ComponentFixture<OfertsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfertsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
