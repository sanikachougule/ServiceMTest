import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(
    private _snackbar:MatSnackBar
  ) { }
  openSnackBar(msg : string) {
    this._snackbar.open(msg, 'close', {
     duration : 3500,
     horizontalPosition: 'left',
     verticalPosition: 'top'
  })
}
}
