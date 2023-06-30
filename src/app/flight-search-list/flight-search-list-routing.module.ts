import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightSearchListPage } from './flight-search-list.page';

const routes: Routes = [
  {
    path: '',
    component: FlightSearchListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightSearchListPageRoutingModule {}
