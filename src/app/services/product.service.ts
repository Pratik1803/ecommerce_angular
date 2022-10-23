import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/typings/interfaces/product.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:5000/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, httpOptions);
  }
}
