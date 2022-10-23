import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemsNo: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.onWishlistChangeService().subscribe((newRes) => {
      this.cartItemsNo = newRes.length;
    });
  }

  ngOnInit(): void {}
}
