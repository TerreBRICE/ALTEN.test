import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpService: HttpClient) { }

  getProducts() {
    return this.httpService.get('../../assets/products.json');
  }
}
