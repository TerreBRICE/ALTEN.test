import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../shared/models/product.model';
import {CrudItemOptions} from '../../shared/utils/crud-item-options/crud-item-options.model';
import {ControlType} from '../../shared/utils/crud-item-options/control-type.model';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {

  products!: Product[];
  config!: CrudItemOptions[];

  protected readonly Product = Product;

  constructor(private productsService: ProductsService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(res => {
        this.products = res['data'];
      });

    this.config = [
      {
        key: 'code',
        label: 'Code',
        controlType: ControlType.INPUT,
        type: 'text',
        columnOptions: {default: true}
      },
      {
        key: 'name',
        label: 'Name',
        type: 'text',
        controlType: ControlType.INPUT,
        columnOptions: {default: true}
      },
      {
        key: 'description',
        label: 'Description',
        type: 'text',
        controlType: ControlType.INPUT,
        columnOptions: {default: false}
      },
      {
        key: 'price',
        label: 'Price',
        controlType: ControlType.INPUT,
        type: 'number',
        columnOptions: {default: false}
      },
      {
        key: 'category',
        label: 'Category',
        controlType: ControlType.SELECT,
        options: [
          {value: null, label: 'Select category', disabled: true},
          {value: 'Accessories', label: 'Accessories'},
          {value: 'Fitness', label: 'Fitness'},
          {value: 'Clothing', label: 'Clothing'},
          {value: 'Electronics', label: 'Electronics'},
        ],
        columnOptions: {default: false}
      },
      {
        key: 'inventoryStatus',
        label: 'Inventory status',
        controlType: ControlType.SELECT,
        options: [
          {value: null, label: 'Select inventory status', disabled: true},
          {value: 'INSTOCK', label: 'In stock'},
          {value: 'OUTOFSTOCK', label: 'Out of stock'},
          {value: 'LOWSTOCK', label: 'Low stock'},
        ],
        columnOptions: {default: false}
      },
      {
        key: 'rating',
        label: 'Rating',
        controlType: ControlType.SELECT,
        options: [
          {value: null, label: 'Select rating', disabled: true},
          {value: 1, label: '1'},
          {value: 2, label: '2'},
          {value: 3, label: '3'},
          {value: 4, label: '4'},
          {value: 5, label: '5'},
        ],
        columnOptions: {default: false}
      },
      {
        key: 'image',
        label: 'Image',
        controlType: ControlType.FILE,
        columnOptions: {default: false}
      },


    ];
  }

  deleteProducts(id: number[]) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected product?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //   Delete product
      }
    });
  }

}
