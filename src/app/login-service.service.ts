import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loginUrl = 'assets/login-credentials.json';

  constructor( private httpClient: HttpClient  ) { }

  getLogin() {
    return this.httpClient.get(this.loginUrl);
  }
}
