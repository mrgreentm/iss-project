import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlApi = 'http://api.open-notify.org/iss-now.json'
  constructor(private httpClient: HttpClient) { }

  getInformationISS(): Observable<any> {
    return this.httpClient.get(this.urlApi);
  }
}
