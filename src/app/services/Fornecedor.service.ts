import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFornecedor } from '../components/fornecedores-cadastro/IFornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  apiURL: string = 'http://localhost:8080/fornecedores';

  constructor(private httpClient: HttpClient) {}

  getFornecedores() {
    return this.httpClient.get(this.apiURL);
  }

  saveFornecedor(fornecedor: IFornecedor) {
    return this.httpClient.post(this.apiURL, fornecedor);
  }

  excluirFornecedor(id: string) {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}
