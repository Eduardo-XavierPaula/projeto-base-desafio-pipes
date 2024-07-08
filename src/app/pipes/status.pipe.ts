import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    try {
      const statusList: { [key: number]: string } = {
        1: 'Ativo',
        2: 'Inativo',
      };

      if (!statusList.hasOwnProperty(userStatus)) {
        throw new Error('Ocorreu um erro.');
      }

      return statusList[userStatus] ?? 'Inválido';
    } catch (error) {
      return 'Status Inválido';
    }
  }
}
