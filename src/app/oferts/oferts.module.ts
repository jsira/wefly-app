import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OfertsPage } from './oferts.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OfertsPageRoutingModule } from './oferts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OfertsPageRoutingModule
  ],
  declarations: [OfertsPage]
})
export class OfertsPageModule {}
