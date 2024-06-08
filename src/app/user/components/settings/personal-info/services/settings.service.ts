import {Injectable} from "@angular/core";
import {API_BASE_URL} from "../../../../../../api.config";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SettingsService{
  private apiUrl = `${API_BASE_URL}/Accounts/UserId/UserId`;
  private userUrl = `${API_BASE_URL}/Users`;

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<any> {
    // Make an HTTP GET request to the API endpoint
    return this.httpClient.get<any>(this.apiUrl);
  }

  getUserData(id: any): Observable<any>{
    return this.httpClient.get<any>(`${this.userUrl}/${id}`)
  }


}
