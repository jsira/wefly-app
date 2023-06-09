import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'explorer',
        loadChildren: () => import('../explorer/explorer.module').then(m => m.ExplorerPageModule)
      },
      {
        path: 'destination',
        loadChildren: () => import('../destination/destination.module').then(m => m.DestinationPageModule)
      },
      {
        path: 'oferts',
        loadChildren: () => import('../oferts/oferts.module').then(m => m.OfertsPageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explorer',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/explorer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
