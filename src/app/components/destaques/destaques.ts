import { Component, CUSTOM_ELEMENTS_SCHEMA, afterNextRender } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { destaques } from '../../services/mockdata';
import { Product } from '../../services/interfaces';
import { CardProduct } from "../../widgets/card-product/card-product";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-destaques',
  imports: [CardProduct, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './destaques.html',
  styleUrl: './destaques.css',
})
export class Destaques {
  constructor() {
    afterNextRender(() => {
      register();
    });
  }

  destaques: Product[] = destaques;
}
