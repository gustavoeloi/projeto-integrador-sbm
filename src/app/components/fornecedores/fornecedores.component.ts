import { Component, OnInit, OnChanges } from '@angular/core';
import { IFornecedor } from '../fornecedores-cadastro/IFornecedor';
import { FornecedorService } from 'src/app/services/Fornecedor.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss'],
})
export class FornecedoresComponent implements OnInit {
  fornecedores: IFornecedor[] = [];
  dataSource: any[] = [];

  displayedColumns: string[] = [
    'nome',
    'contato',
    'cnpj',
    'situacao',
    'endereco',
    'estado',
    'actions',
  ];

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.fornecedorService.excluirFornecedor(id).subscribe(
          (sucesso) => {
            this.showMessage('Fornecedor excluído com sucesso!');
            this.getAllFornecedores();
          },
          (error) => {
            this.showMessage('Erro ao excluir curso!');
          }
        );
      }
    });
  }

  editFornecedor(id: string) {
    this.router.navigate(['/fornecedores/editar', id]);
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
