import { Component, OnInit } from '@angular/core';
import { IFornecedor } from '../fornecedores-cadastro/IFornecedor';
import { FornecedorService } from 'src/app/services/Fornecedor.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss'],
})
export class FornecedoresComponent implements OnInit {
  fornecedores: IFornecedor[] = [];

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit(): void {
    this.getAllFornecedores();
  }

  getAllFornecedores() {
    this.fornecedorService.getFornecedores().subscribe((fornecedor: any) => {
      this.fornecedores = fornecedor;
      this.dataSource = this.fornecedores;
    });
  }

  deleteFornecedor(id: string) {
    this.fornecedorService.excluirFornecedor(id).subscribe(() => {
      this.getAllFornecedores();
    });
  }

  displayedColumns: string[] = [
    'nome',
    'contato',
    'cnpj',
    'situacao',
    'endereco',
    'estado',
    'actions',
  ];
  dataSource = this.fornecedores;
}
