import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/typings/interfaces/product.interface';
import { CartItemComponent } from '../cart-item/cart-item.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  private url: string = 'http://localhost/wishlist';

  constructor(private http: HttpClient, private cartService: CartService) {
    this.cartService.onWishlistChangeService().subscribe((res) => {
      this.cartItems = res;
    });
  }

  ngOnInit(): void {
    this.cartService.getWishlistedItemsService().subscribe((res) => {
      this.cartItems = res;
    });
  }

  onRemoveItem(cI: Product) {
    this.cartService.removeFromWishList(cI).subscribe((res) => {});
  }
}
