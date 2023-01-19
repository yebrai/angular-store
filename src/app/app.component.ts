import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Here its your web';
  http = inject(HttpClient)
  products: Product[] = []

  onChange() {
    this.title = "Changing data value"
  }

  //"UseEffect"
  ngOnInit() {
    //Reactive programing RxJS - no need promis, need observable
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      this.products = data;

    })
  }
}
