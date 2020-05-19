import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private snackBar : MatSnackBar) { }

  openSnackBar = (type : string, message : string) => this.snackBar.open(message, '', {
    panelClass: `snackbar-${type}`,
    duration: 3000});
}
