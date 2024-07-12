import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/models/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashbord',
  templateUrl: './product-dashbord.component.html',
  styleUrls: ['./product-dashbord.component.scss']
})
export class ProductDashbordComponent implements OnInit {
 productArr !: Array<Iproduct>;
  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productArr = this._productService.fetchAllProducts();
  }

}
