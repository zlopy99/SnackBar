import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { CustomeSnackbarService } from './custom-snackbar/custom-snackbar/custome-snackbar.service';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css']
})
export class MainSiteComponent {

  constructor(public _customSnackbar: CustomeSnackbarService) {}

  openSnackBar(message: string, action: string, type: string, duration?: number) {
    if(type.toLowerCase() === 'success') 
      this._customSnackbar.openSuccessSnackBar(message, action, type, duration);
    else if(type.toLowerCase() === 'error')
      this._customSnackbar.openErrorSnackBar(message, action, type, duration);
    else if(type.toLowerCase() === 'warning')
      this._customSnackbar.openWarningSnackBar(message, action, type, duration);
    else if(type.toLowerCase() === 'info')
      this._customSnackbar.openInfoSnackBar(message, action, type, duration);
  }
}
