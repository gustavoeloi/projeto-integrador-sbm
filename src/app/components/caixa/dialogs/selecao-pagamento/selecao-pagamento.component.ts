import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-selecao-pagamento',
  templateUrl: './selecao-pagamento.component.html',
  styleUrls: ['./selecao-pagamento.component.scss'],
})
export class SelecaoPagamentoComponent {
  formaPagamento: string = '';

  constructor(
    public dialogRef: MatDialogRef<SelecaoPagamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmar(): void {
    this.dialogRef.close(this.formaPagamento);
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
