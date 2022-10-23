import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/typings/interfaces/product.interface';
import { isNgTemplate } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'http://localhost:5000/wishlist';
  private wishlist: Product[] = [];
  private wishListObs = new Subject<Product[]>();
  constructor(private http: HttpClient) {
    this.getWishlistedItemsService().subscribe((data) => {
      this.wishlist = data;
      this.wishListObs.next(data);
    });
  }

  onWishlistChangeService() {
    return this.wishListObs.asObservable();
  }

  addToWishListService(product: Product): Observable<Product> {
    //check if the product already exists in wishlist
    //check is true if the wishlist cotains product.
    const check = !!this.wishlist.filter((item) => item.id === product.id)
      .length;
    if (check) return of(product);
    this.wishlist.push(product);
    this.wishListObs.next(this.wishlist);
    return this.http.post<Product>(this.url, product, httpOptions);
  }

  removeFromWishList(product: Product): Observable<Product> {
    this.wishlist.splice(this.wishlist.indexOf(product), 1);
    this.wishListObs.next(this.wishlist);
    return this.http.delete<Product>(`${this.url}/${product.id}`, httpOptions);
  }

  getWishlistedItemsService(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, httpOptions);
  }
}
