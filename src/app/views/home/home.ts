import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Destaques } from '../../components/destaques/destaques';
import { CardProduct } from '../../widgets/card-product/card-product';
import { Category, Product } from '../../services/interfaces';
import { categories, exploreProducts, productPromosToday } from '../../services/mockdata';

@Component({
  selector: 'app-home',
  imports: [Destaques, CardProduct],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  promosToday: Product[] = productPromosToday;
  categories: Category[] = categories;
  selectedCategoryId = 1;
  exploreProducts: Product[] = exploreProducts;

  countdown = { days: 5, hours: 23, minutes: 59, seconds: 35 };
  private countdownInterval?: ReturnType<typeof setInterval>;

  @ViewChild('categorySwiper') categorySwiperRef?: ElementRef;
  @ViewChild('exploreSwiper')  exploreSwiperRef?: ElementRef;

  ngOnInit() {
    this.countdownInterval = setInterval(() => {
      const c = this.countdown;
      if (c.seconds > 0) { c.seconds--; }
      else if (c.minutes > 0) { c.minutes--; c.seconds = 59; }
      else if (c.hours > 0) { c.hours--; c.minutes = 59; c.seconds = 59; }
      else if (c.days > 0) { c.days--; c.hours = 23; c.minutes = 59; c.seconds = 59; }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.countdownInterval);
  }

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }

  prevCategory() {
    this.categorySwiperRef?.nativeElement?.swiper?.slidePrev();
  }

  nextCategory() {
    this.categorySwiperRef?.nativeElement?.swiper?.slideNext();
  }

  prevExplore() {
    this.exploreSwiperRef?.nativeElement?.swiper?.slidePrev();
  }

  nextExplore() {
    this.exploreSwiperRef?.nativeElement?.swiper?.slideNext();
  }
}
