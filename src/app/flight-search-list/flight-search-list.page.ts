import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search-list',
  templateUrl: './flight-search-list.page.html',
  styleUrls: ['./flight-search-list.page.scss'],
})
export class FlightSearchListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBack(){
    this.router.navigate(['/flight']);

  }

}
