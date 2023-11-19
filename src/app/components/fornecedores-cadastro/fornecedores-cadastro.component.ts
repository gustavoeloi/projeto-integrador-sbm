import { UFService } from './../../services/UF.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IFornecedor } from './IFornecedor';
import { FornecedorService } from 'src/app/services/Fornecedor.service';

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
    private fornecedorService: FornecedorService
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
    const data = {
      nome: this.formFornecedor.get('nome')!.value,
      loja: this.formFornecedor.get('loja')!.value,
      cnpj: this.formFornecedor.get('cnpj')!.value,
      contato: this.formFornecedor.get('contato')!.value,
      situacao: this.formFornecedor.get('situacao')!.value,
      estado: this.formFornecedor.get('estado')!.value, // Aqui o objeto do estado selecionado será armazenado
      endereco: this.formFornecedor.get('endereco')!.value,
    };
    this.fornecedorService.saveFornecedor(data).subscribe((res) => {
      console.log(res);
    });
  }

  getUF(): void {
    this.ufService.getUFs().subscribe((uf) => {
      this.ufs = Object.values(uf);
    });
  }
}
