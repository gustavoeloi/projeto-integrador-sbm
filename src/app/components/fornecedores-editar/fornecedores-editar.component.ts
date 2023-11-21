import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/Fornecedor.service';
import { IFornecedor } from '../fornecedores-cadastro/IFornecedor';
import { UFService } from 'src/app/services/UF.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fornecedores-editar',
  templateUrl: './fornecedores-editar.component.html',
  styleUrls: ['./fornecedores-editar.component.scss'],
})
export class FornecedoresEditarComponent implements OnInit {
  ufs: any[] = [];
  formFornecedor: FormGroup;

  constructor(
    private form: FormBuilder,
    private route: ActivatedRoute,
    private fornecedorService: FornecedorService,
    private ufService: UFService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.getUfs();
    this.formFornecedor = this.form.group({
      nome: [''],
      loja: [''],
      contato: [''],
      cnpj: [''],
      situacao: [''],
      estado: [''],
      endereco: [''],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const fornecedorId = params.get('id');
      if (fornecedorId !== null) {
        this.fornecedorService.getFornecedorById(fornecedorId).subscribe(
          (fornecedor: IFornecedor) => {
            // Popule seu formulário com os dados do fornecedor
            this.formFornecedor.patchValue({
              nome: fornecedor.nome,
              loja: fornecedor.loja,
              contato: fornecedor.contato,
              cnpj: fornecedor.cnpj,
              situacao: fornecedor.situacao,
              estado: fornecedor.estado,
              endereco: fornecedor.endereco,
            });
          },
          (error) => {}
        );
      } else {
        // Lógica para lidar com o ID de fornecedor nulo (caso necessário)
      }
    });
  }

  getUfs() {
    this.ufService.getUFs().subscribe((uf) => {
      this.ufs = Object.values(uf);
    });
  }

  updateFornecedor(formValue: any) {
    const fornecedorID = this.route.snapshot.paramMap.get('id');
    const fornecedorAtualizado: IFornecedor = {
      id: fornecedorID,
      ...formValue,
    };

    if (fornecedorID !== null) {
      this.fornecedorService
        .updateFornecedor(fornecedorID, fornecedorAtualizado)
        .subscribe(
          (response) => {
            this.router.navigate(['/fornecedores']);
          },
          (error) => {
            console.log('Error ao atualizar fornecedor', error);
          }
        );
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000,
    });
  }

  showMessage(message: string) {
    this.openSnackBar(message);
  }
}
