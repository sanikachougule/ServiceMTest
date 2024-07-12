import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passnger.interface';
import { Iproduct } from 'src/app/shared/models/product.interface';
import { PassangerService } from 'src/app/shared/services/passanger.service';
import { SnakbarService } from 'src/app/shared/services/snakbar.service';

@Component({
  selector: 'app-passanger-card',
  templateUrl: './passanger-card.component.html',
  styleUrls: ['./passanger-card.component.scss']
})
export class PassangerCardComponent implements OnInit {
  
@Input() passObj !: Ipassanger;

isInEditMode :boolean= false;
fullName!:HTMLInputElement;
@Output() emitRemoveMsg :EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(
    private _passangerService: PassangerService,
    private _snackbarService: SnakbarService
  
  ) { }

  ngOnInit(): void {
  }
  onUpdate(fullName:HTMLInputElement){
   // let newproObj={
      //...this.passObj,
      //fullname: fullName.value,
     // }
      this.passObj ={...this.passObj,fullname:fullName.value};
      console.log(this.passObj);
    this._passangerService.updatePassInfo(this.passObj);
  }
  onRemove(){
   let getConfirm = confirm(`Are you sure,you want remove this passanger item ? `)
   if(getConfirm){
    this._passangerService.removePassObj(this.passObj);
    this.emitRemoveMsg.emit(true)
   }
   this._snackbarService.openSnackBar("Passanger Data is Deleted succesfully !!!")
   }
  }


