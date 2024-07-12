import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductStatus } from 'src/app/shared/models/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input() proObj!:Iproduct;
ProductStatusEnum= ProductStatus;
  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
  }
  onProductUpdate(status:ProductStatus){
   this.proObj.pstatus=status;
  this._productService.updateProductStatus(this.proObj);
  }
}
