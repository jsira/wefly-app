import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'flight',
    loadChildren: () => import('./flight/flight.module').then( m => m.FlightPageModule)
  },
  {
    path: 'flight-search-list',
    loadChildren: () => import('./flight-search-list/flight-search-list.module').then( m => m.FlightSearchListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
