import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightSearchListPageRoutingModule } from './flight-search-list-routing.module';

import { FlightSearchListPage } from './flight-search-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightSearchListPageRoutingModule
  ],
  declarations: [FlightSearchListPage]
})
export class FlightSearchListPageModule {}
