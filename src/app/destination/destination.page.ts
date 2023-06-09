import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: 'destination.page.html',
  styleUrls: ['destination.page.scss']
})
export class DestinationPage {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  constructor() {}

}
