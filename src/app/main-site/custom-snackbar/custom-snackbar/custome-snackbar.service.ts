import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../custom-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomeSnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  
  openSuccessSnackBar(message: string, action: string, type: string, duration?: number) {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: message,
        action: action,
        icon: 'check_circle',
        type: type,
        snackBar: this._snackBar
      },
      panelClass: 'success-snackbar',
      duration: duration
    });
  }

  openErrorSnackBar(message: string, action: string, type: string, duration?: number) {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: message,
        action: action,
        icon: 'error',
        type: type,
        snackBar: this._snackBar
      },
      panelClass: 'error-snackbar'
    });
  }

  openWarningSnackBar(message: string, action: string, type: string, duration?: number) {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: message,
        action: action,
        icon: 'warning',
        type: type,
        snackBar: this._snackBar
      },
      panelClass: 'warning-snackbar'
    });
  }

  openInfoSnackBar(message: string, action: string, type: string, duration?: number) {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      data: {
        message: message,
        action: action,
        icon: 'feedback',
        type: type,
        snackBar: this._snackBar
      },
      panelClass: 'info-snackbar'
    });
  }
}
