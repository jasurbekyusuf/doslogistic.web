import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://tarteeb-api.azurewebsites.net/api';
  private userPayload: any;
  tokenDecode: any;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodeToken();
  }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}/Accounts/SignUp`, userObj);
  }

  login(loginObj: any) {
    const { email, password } = loginObj;
    const encodedPassword = encodeURIComponent(password);
    const url = `${this.baseUrl}/Accounts/Login?email=${email}&password=${encodedPassword}`;
    return this.http.get<any>(url);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['signin']);
  }

  getTeam() {
    return this.http.get<any>(`${this.baseUrl}/Teams`);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  decodeToken() {
    const token = this.getToken()!;
    console.log(token);

    if (!token) {
      return null;
    }

    return (jwt_decode as any)(token);
    // const jwtHelper = new JwtHelperService();
    // console.log(jwtHelper.decodeToken(token))
    // return jwtHelper.decodeToken(token)
  }

  getFullnameFormToken() {
    if (this.userPayload) {
      return this.userPayload.firstName;
    }
  }

  getRoleFormToken() {
    if (this.userPayload) {
      return this.userPayload.role;
    }
  }

  getUserId(): string {
    if (this.userPayload) {
      return this.userPayload.userId;
    }
    return '';
  }
}
