import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

  getDiscountPrice(product: any) {
    const totalValue = product.price * ((100 - product.discount) / 100)
    return totalValue.toFixed(0);
  }

}
