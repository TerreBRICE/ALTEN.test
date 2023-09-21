import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductsComponent } from './products/products.component';
import {DataViewModule} from "primeng/dataview";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputText, InputTextModule} from "primeng/inputtext";
import {TagModule} from "primeng/tag";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {SharedModule} from "../shared/shared.module";
import {ConfirmationService} from "primeng/api";



@NgModule({
  declarations: [
    ProductAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    TagModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    ConfirmDialogModule,
    SharedModule,

  ],
  exports: [
    DataViewModule
  ],
  providers: [ConfirmationService]
})
export class ProductModule { }
