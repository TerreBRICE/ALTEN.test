import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[];
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  layout: string = 'grid';
  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(res => {
        console.log(res['data']);
        this.products = res['data'];
      });

  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


}
