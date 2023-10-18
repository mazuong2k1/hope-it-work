import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private canAccessBussSup: boolean = false;

  setCanAccessBussSup(canAccess: boolean): void {
    this.canAccessBussSup = canAccess;
  }

  getCanAccessBussSup(): boolean {
    return this.canAccessBussSup;
  }
}
