import { OperationsListResponse } from '../types/operations-list-response.type';

export const OperationsListResponseMock: OperationsListResponse = [
  {
    customerName: 'João',
    customerStatus: 1,
    operationDate: '2023-10-31T17:30:00.00Z',
    operationValue: 500.0,
    operationRisk: 0.4,
  },
  {
    customerName: 'Maria',
    customerStatus: 2,
    operationDate: '2023-10-30T13:15:00.00Z',
    operationValue: 750.99,
    operationRisk: 0.0675,
  },
  {
    customerName: 'Pedro',
    customerStatus: 1,
    operationDate: '2023-10-29T01:15:00.00Z',
    operationValue: 3000000.0,
    operationRisk: 1.0,
  },
  {
    customerName: 'Laura',
    customerStatus: 2,
    operationDate: '2023-10-25T03:25:00.00Z',
    operationValue: 150300.35,
    operationRisk: 0.10315,
  },
];
