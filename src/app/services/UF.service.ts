import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UFService {
  private apiURL: string =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

  constructor(private http: HttpClient) {}

  getUFs(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
