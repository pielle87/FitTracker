import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user$: BehaviorSubject<string> = new BehaviorSubject<string>('Guest');
  private _isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get isLogged$(): BehaviorSubject<boolean> {
    return this._isLogged$;
  }

  constructor() { }

  login(username: string, password: string) {
    // TODO: create a real login function
    // TODO: do I need an error if username and/or password is empty?
    // theoretically that should never happen because the forms have validators
    username ? this._user$.next(username) : this._user$.next('pielle');
    this._isLogged$.next(true);
  }

  logout() {
    // TODO: create a real logout function
    this._user$.next('Guest');
    this._isLogged$.next(false);
  }

}
