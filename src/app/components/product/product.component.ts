import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!: Product

  // Or initialice with initial value
  // @Input() product: Product = {
  //   id: 0,
  //   title: '',
  //   price: 0,
  //   images: []
  // }


}
