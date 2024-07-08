import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { OperationsListResponse } from '../types/operations-list-response.type';
import { OperationsListResponseMock } from '../mocks/operations-list-response.mock';

@Injectable({
  providedIn: 'root',
})
export class OperationsServices {
  getOperations(): Observable<OperationsListResponse> {
    return of(OperationsListResponseMock);
  }
}
