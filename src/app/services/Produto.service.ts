import { Injectable } from '@angular/core';
import { productsMock } from './product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtos: any[] = [];

  constructor() {
    this.produtos = productsMock;
  }

  getProdutos() {
    return this.produtos;
  }
}
