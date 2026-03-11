import { Component } from '@angular/core';
import { Destaques } from '../../components/destaques/destaques';
import { CardProduct } from '../../widgets/card-product/card-product';
import { Product } from '../../services/interfaces';
import { productPromosToday } from '../../services/mockdata';
@Component({
  selector: 'app-home',
  imports: [Destaques, CardProduct],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  promosToday: Product[] = productPromosToday;
}
