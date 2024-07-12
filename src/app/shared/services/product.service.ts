import { Injectable } from '@angular/core';
import { Iproduct, ProductStatus } from '../models/product.interface';
import { SnakbarService } from './snakbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 productArray: Array<Iproduct>=[
  {
    pname:"Iphone",
    pdetails:"Mobile 126Gb 64gb",
    pstatus:ProductStatus.InProgress,
    id:"123"
  },
  {
    pname:"Samsung",
    pdetails:"Mobile 32Gb Storage 64gb",
    pstatus:ProductStatus.InProgress,
    id:"123"
  },
  {
    pname:"Redmi 9A",
    pdetails:"Mobile 64Gb 32gb",
    pstatus:ProductStatus.InProgress,
    id:"123"
  }
 ]
  constructor(
    private _snackarService: SnakbarService
  ) { }
  fetchAllProducts():Array<Iproduct>{
     return this.productArray
  }
  addProduct(product:Iproduct){
    this.productArray.push(product)
  }


  updateProductStatus(prodObj: Iproduct){
  let getIndex= this.productArray.findIndex(product =>product.id === prodObj.id)
  this.productArray[getIndex]=prodObj
  this._snackarService.openSnackBar(`The Status of  product is ${prodObj.pname} is updated to ${prodObj.pstatus}`)
  }
}
