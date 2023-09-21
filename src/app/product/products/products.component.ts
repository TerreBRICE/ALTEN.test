import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import { SelectItem } from 'primeng/api';
import {Product} from "../../shared/models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild('gridItem', { read: TemplateRef })
  gridItemTemplate: TemplateRef<unknown>;

  products: Product[];
  productsReady = false;
  sortOptions!: SelectItem[];

  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(res => {
        this.products = res['data'];
        this.productsReady = true;
      });

    this.sortOptions = [
      {
        label: 'Ascending price',
        value: 'asc-price',
      },
      {
        label: 'Decreasing price',
        value: 'desc-price',
      }
    ];

  }

}
