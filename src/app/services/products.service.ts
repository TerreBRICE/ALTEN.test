import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private hhtpService: HttpClient) { }

  getProducts() {
    return this.hhtpService.get('../../assets/products.json');
  }
}
