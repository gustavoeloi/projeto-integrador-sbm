import { IFornecedor } from './../components/fornecedores-cadastro/IFornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  apiURL: string = 'http://localhost:8080/fornecedores';

  constructor(private http: HttpClient) {}

  getFornecedores() {
    return this.http.get<IFornecedor[]>(`${this.apiURL}/`).pipe(
      tap((fornecedores) => {
        console.log(fornecedores);
      })
    );
  }

  saveFornecedor(fornecedor: IFornecedor): Observable<IFornecedor> {
    return this.http.post<IFornecedor>(`${this.apiURL}/`, fornecedor);
  }

  getFornecedorById(id: string): Observable<IFornecedor> {
    return this.http.get<IFornecedor>(`${this.apiURL}/${id}`);
  }

  excluirFornecedor(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  updateFornecedor(id: string, fornecedor: IFornecedor) {
    const url = `${this.apiURL}/${id}`;
    return this.http.put(url, fornecedor);
  }
}
