import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isAuthenticated = false;

  constructor() { }

  public authenticate(status: boolean): void {
    this.isAuthenticated = status;
  }
}
