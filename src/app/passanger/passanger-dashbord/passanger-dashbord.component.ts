import { Component, OnInit } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passnger.interface';
import { PassangerService } from 'src/app/shared/services/passanger.service';

@Component({
  selector: 'app-passanger-dashbord',
  templateUrl: './passanger-dashbord.component.html',
  styleUrls: ['./passanger-dashbord.component.scss']
})
export class PassangerDashbordComponent implements OnInit {
 passArray !:Array< Ipassanger>;

 totalCount !: number;
 checkInCount !: number;

  constructor(
    private _passangerService:PassangerService
  ) { }

  ngOnInit(): void {
    this.passArray=this._passangerService.fetchAllPassanger();
  this.getCount();
  }
  getCount(){
    this.totalCount = this.passArray.length;
    this.checkInCount= this.passArray.filter(pass=>pass.checkedIn).length
  }
 
}
