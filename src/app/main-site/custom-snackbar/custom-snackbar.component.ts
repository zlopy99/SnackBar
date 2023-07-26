import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { interval, map, mapTo, Observable, scan, Subject, takeLast, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent implements OnInit, OnDestroy {
  duration!: number;
  progress!: Observable<number>;
  destroy: Subject<void> = new Subject<void>();

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  closeSnackbar() {
    this.destroy.next();
    this.destroy.complete();
    this.data.snackBar.dismiss();
  }

  ngOnInit() {
    this.duration = this.data.duration !== undefined ? Number(this.data.duration) / 10 : 0;

    if(this.duration !== 0) {
      this.progress = interval(50).pipe(
        mapTo(100),
        scan(a => a - 1),
        takeWhile((value) => value >= 0, true),
        takeUntil(this.destroy),
        map((value) => (value == 0 ? 0 : value))
      );
      this.progress.pipe(takeLast(1)).subscribe((_) => {
        this.data.snackBar.dismiss();
        console.log('done');
      });
    } else {
      this.progress = interval(50).pipe(
        mapTo(100),
        takeUntil(this.destroy)
      );
      this.progress.pipe(takeLast(1)).subscribe((_) => {
        this.data.snackBar.dismiss();
        console.log('done');
      });
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

}
