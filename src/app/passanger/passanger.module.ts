import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassangerDashbordComponent } from './passanger-dashbord/passanger-dashbord.component';
import { PassangerCountComponent } from './passanger-count/passanger-count.component';
import { PassangerCardComponent } from './passanger-card/passanger-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PassangerDashbordComponent,
    PassangerCountComponent,
    PassangerCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PassangerDashbordComponent
  ]
})
export class PassangerModule { }
