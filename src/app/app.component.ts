import { Component, OnInit } from '@angular/core';
import { OperationsServices } from './services/operations.services';
import { OperationsListResponse } from './types/operations-list-response.type';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly _operationsService: OperationsServices) {}
  searchTerm: string = '';
  // operationsList: OperationsListResponse = [];
  operationsList$: Observable<OperationsListResponse> | undefined;

  ngOnInit(): void {
    this.operationsList$ = this._operationsService.getOperations();
    // this.getOperations();
  }

  // getOperations() {
  //   this._operationsService
  //     .getOperations()
  //     .pipe(take(1))
  //     .subscribe((operationsListResponse) => {
  //       this.operationsList = operationsListResponse;
  //     });
  // }
}
