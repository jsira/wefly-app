import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightSearchListPage } from './flight-search-list.page';

describe('FlightSearchListPage', () => {
  let component: FlightSearchListPage;
  let fixture: ComponentFixture<FlightSearchListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FlightSearchListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
