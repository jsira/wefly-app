import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Swiper } from 'swiper';



@Component({
  selector: 'app-oferts',
  templateUrl: 'oferts.page.html',
  styleUrls: ['oferts.page.scss']
})
export class OfertsPage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
 
  constructor(public navCtrl: NavController, private router: Router) {}
 
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
 
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
 
  goNext() {
    this.swiper?.slideNext();
  }
 
  goPrev() {
    this.swiper?.slidePrev();
  }

  goToFlight(){
    this.router.navigate(['/flight']);

  }

  goToBack(){
    this.router.navigate(['/']);

  }

}
