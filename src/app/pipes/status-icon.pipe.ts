import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon',
})
export class StatusIconPipe implements PipeTransform {
  transform(userStatus: number): string {
    const statusIcons: { [key: number]: string } = {
      1: 'assets/icons/active-icon.png',
      2: 'assets/icons/inactive-icon.png',
    };
    try {
      if (!statusIcons.hasOwnProperty(userStatus)) {
        throw new Error('Ocorreu um erro.');
      }

      return statusIcons[userStatus] ?? statusIcons[2];
    } catch (error) {
      return statusIcons[2];
    }
  }
}
