import { TestBed } from '@angular/core/testing';

import { CustomeSnackbarService } from './custome-snackbar.service';

describe('CustomeSnackbarService', () => {
  let service: CustomeSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
