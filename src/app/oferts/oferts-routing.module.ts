import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertsPage } from './oferts.page';

const routes: Routes = [
  {
    path: '',
    component: OfertsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertsPageRoutingModule {}
