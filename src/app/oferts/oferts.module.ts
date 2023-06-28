import { IonicModule } from '@ionic/angular'; 
import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    OfertsPageRoutingModule,
    
  ],
  declarations: [OfertsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OfertsPageModule {}
