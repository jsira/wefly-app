import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
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
 
  constructor() {}
 
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

}
