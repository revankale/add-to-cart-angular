import { Component, inject } from '@angular/core';
import { ProductService } from './pages/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productService = inject(ProductService);

  isCardVisible: boolean = false;

  cartItem: any[] = [];


  constructor() {
    this.productService.onAddToCart$.subscribe((res: any) => {
      debugger;
      this.cartItem.unshift(res);

    })
  }

  showCart() {
    this.isCardVisible = !this.isCardVisible;
  }

  removeProduct(index:number) {
    this.cartItem.splice(index, 1);
  }


}
