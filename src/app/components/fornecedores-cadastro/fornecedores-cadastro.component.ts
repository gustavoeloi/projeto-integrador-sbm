import { UFService } from './../../services/UF.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IFornecedor } from './IFornecedor';
import { FornecedorService } from 'src/app/services/Fornecedor.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Estado {
  UF: string;
  nome: string;
}

@Component({
  selector: 'app-fornecedores-cadastro',
  templateUrl: './fornecedores-cadastro.component.html',
  styleUrls: ['./fornecedores-cadastro.component.scss'],
})
export class FornecedoresCadastroComponent {
  ufs: any[] = [];
  formFornecedor: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ufService: UFService,
    private fornecedorService: FornecedorService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.getUF();
    this.formFornecedor = this.formBuilder.group({
      nome: [''],
      loja: [''],
      contato: [''],
      cnpj: [''],
      situacao: [''],
      estado: [''],
      endereco: [''],
    });
  }

  cadastrar(): void {
    const fornecedor = {
      nome: this.formFornecedor.get('nome')!.value,
      loja: this.formFornecedor.get('loja')!.value,
      cnpj: this.formFornecedor.get('cnpj')!.value,
      contato: this.formFornecedor.get('contato')!.value,
      situacao: this.formFornecedor.get('situacao')!.value,
      estado: this.formFornecedor.get('estado')!.value,
      endereco: this.formFornecedor.get('endereco')!.value,
    };
    this.fornecedorService.saveFornecedor(fornecedor).subscribe((res) => {
      this.showMessage('Fornecedor cadastrado com sucesso!');
      this.router.navigate(['/fornecedores']);
    });
  }

  getUF(): void {
    this.ufService.getUFs().subscribe((uf) => {
      this.ufs = Object.values(uf);
    });
  }

  openSnackBar(message: string, actions: string) {
    this._snackBar.open(message, actions, {
      duration: 5000,
    });
  }

  showMessage(message: string) {
    this.openSnackBar(message, 'Fechar');
  }
}
