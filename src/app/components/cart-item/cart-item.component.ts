import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/typings/interfaces/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: Product;
  @Output() remove: EventEmitter<Product> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onRemobeBtnClick(cI: Product) {
    this.remove.emit(cI);
  }
}
