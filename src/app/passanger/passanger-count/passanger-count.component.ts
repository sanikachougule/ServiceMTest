import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passnger.interface';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.scss']
})
export class PassangerCountComponent implements OnInit,OnChanges {
@Input() getTotalCount !: number;
@Input() getCheckInCount !: number;

  constructor() { }
  
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  }

 


