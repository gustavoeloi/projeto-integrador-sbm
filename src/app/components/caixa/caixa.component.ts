import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/Produto.service';
import { MatDialog } from '@angular/material/dialog';
import { SelecaoPagamentoComponent } from './dialogs/selecao-pagamento/selecao-pagamento.component';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss'],
})
export class CaixaComponent {
  product: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';
  totalCartValue: number = 0;
  productsInCart: any[] = [];
  total: number = 0;
  taxService: number = 0.0;
  subtotal: number = 0;
  taxDelivery: number = 0.0;

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog
  ) {
    this.product = this.produtoService.getProdutos();
    this.filteredProducts = this.product;
  }

  searchProduct() {
    console.log(this.searchTerm);
    if (this.searchTerm.trim() !== '') {
      this.filteredProducts = this.product.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredProducts = this.product;
    }
  }

  decreaseQuantity(product: any) {
    const existingProduct = this.productsInCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct && existingProduct.quantityInCart > 0) {
      existingProduct.quantityInCart--;
      if (existingProduct.quantityInCart === 0) {
        this.taxDelivery = 0;
        const index = this.productsInCart.indexOf(existingProduct);
        this.productsInCart.splice(index, 1);
      }
    }
  }

  increaseQuantity(product: any) {
    const existingProduct = this.productsInCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantityInCart++;
      this.taxDelivery = 5;
    } else {
      const newProduct = { ...product };
      newProduct.quantityInCart = 1;
      this.productsInCart.push(newProduct);
    }
  }

  getQuantity(product: any): number {
    const existingProduct = this.productsInCart.find(
      (item) => item.id === product.id
    );

    return existingProduct ? existingProduct.quantityInCart : 0;
  }

  getValue(product: any): number {
    const existingProduct = this.productsInCart.find(
      (item) => item.id === product.id
    );

    return existingProduct
      ? existingProduct.price * existingProduct.quantityInCart
      : 0;
  }

  getSubTotal(): number {
    if (this.productsInCart.length > 0) {
      this.taxService = 0.1;
    }
    return this.productsInCart.reduce((acc, product) => {
      return acc + product.price * product.quantityInCart;
    }, 0);
  }

  getTaxService(): number {
    return this.getSubTotal() * this.taxService;
  }

  getTotal(): number {
    return this.getSubTotal() + this.getTaxService() + this.taxDelivery;
  }

  clearCart() {
    this.productsInCart = [];
    this.taxDelivery = 0;
  }

  abrirDialogPagamento(): void {
    const dialogRef = this.dialog.open(SelecaoPagamentoComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Forma da pagamento selecionada: ', result);
    });
  }
}
