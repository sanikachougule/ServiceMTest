import { Injectable } from '@angular/core';
import { Ipassanger } from '../models/passnger.interface';
import { SnakbarService } from './snakbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {
  passangerArray:Array<Ipassanger>= [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
  constructor(
    private _snackbarService: SnakbarService
  ) { }
  fetchAllPassanger():Array<Ipassanger>{
     return this.passangerArray    
  }
  updatePassInfo(upadtedPassobj: Ipassanger){
   let getIndex = this.passangerArray.findIndex(pass => pass.id === upadtedPassobj.id);
   console.log(getIndex)
   let oldObj = this.passangerArray[getIndex];
   this.passangerArray[getIndex]=upadtedPassobj;
   this._snackbarService.openSnackBar(`The passanger name is updated from ${oldObj.fullname} to ${upadtedPassobj.fullname}`)
  } 
  removePassObj(removePassObj:Ipassanger){
 let getRemoveIndex= this.passangerArray.findIndex(pass => pass.id === removePassObj.id);
 this.passangerArray.splice(getRemoveIndex,1)
 this._snackbarService.openSnackBar(`The passanger name is  ${removePassObj.fullname} is removed successfully !!`)
  }
}
