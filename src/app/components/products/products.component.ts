import { Component, OnInit } from '@angular/core';
import { Product } from 'src/typings/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onAddWlBtnClicked(product: Product) {
    this.cartService.addToWishListService(product).subscribe();
  }
}
