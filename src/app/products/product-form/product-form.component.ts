import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, ProductStatus } from 'src/app/shared/models/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnakbarService } from 'src/app/shared/services/snakbar.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild("productForm") productForm!: NgForm
  constructor(
    private _productService: ProductService,
    private _uuidService: UuidService,
    private _snakbarService: SnakbarService
  ) { }

  ngOnInit(): void {
  }
  onProductAdd(){
     if(this.productForm.valid){
      let newProduct:Iproduct={
        ...this.productForm.value,
        id:this._uuidService.uuid(),
        pstatus:ProductStatus.InProgress
      }
      console.log(newProduct);
      this.productForm.reset();
      this._productService.addProduct(newProduct);
      this._snakbarService.openSnackBar("Product is Added Successfully !!")
     }
  }
}
