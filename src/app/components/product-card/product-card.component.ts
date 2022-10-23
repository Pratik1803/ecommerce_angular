import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/typings/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() type: string = '';
  @Output() addWl: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  buttonClicked(product: Product) {
    // //to add or remove product from wishlist depending on the value of 'type'
    // if (this.type === 'product-card') {
    //   //add product to wishlist
    // } else if(this.type==='') {
    //   //remove from the Wishlist
    // }
    this.addWl.emit(product);
  }
}
