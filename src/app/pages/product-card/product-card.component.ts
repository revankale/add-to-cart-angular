import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;

  productService = inject(ProductService);

  constructor() { }

  ngOnInit(): void {
  }

  getDiscountPrice(product: any) {
    const totalValue = product.price * ((100 - product.discount) / 100)
    return totalValue.toFixed(0);
  }

  addToCart(productData:any){
    debugger;
    this.productService.onAddToCart$.next(productData);
  }

}
