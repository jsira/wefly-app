import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DestinationPage } from './destination.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DestinationPageRoutingModule } from './destination-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DestinationPageRoutingModule
  ],
  declarations: [DestinationPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DestinationPageModule {}
