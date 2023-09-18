import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductAdminComponent} from './product/product-admin/product-admin.component';
import {ProductsComponent} from './product/products/products.component';

const routes: Routes = [
  {path: 'admin/products', component: ProductAdminComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
