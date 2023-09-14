import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ProductAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
