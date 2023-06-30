import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss'],
})
export class FlightPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBack(){
    this.router.navigate(['/']);

  }

  goToFlightList(){
    this.router.navigate(['/flight-search-list']);
  }

}
