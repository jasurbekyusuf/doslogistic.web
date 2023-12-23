import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/modules/auth/helper/user';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public singIn(user: User): Observable<any> {
    return this.http.post<any>(
      'https://tarteeb-api.azurewebsites.net/api/Accounts/login',
      { email: user.email, password: user.password }
    );
  }
}
