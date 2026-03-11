import { Component, Input } from '@angular/core';
import { Product } from '../../services/interfaces';
@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {

  @Input() product: Product | null = null;
}
