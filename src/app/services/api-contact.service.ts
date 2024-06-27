import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiContactService {

  private baseURL = 'https://api.whatsapp.com/send?phone=34660325695';

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get(this.baseURL);
  }
}
