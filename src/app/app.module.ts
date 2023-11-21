import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { FornecedoresCadastroComponent } from './components/fornecedores-cadastro/fornecedores-cadastro.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { FornecedoresEditarComponent } from './components/fornecedores-editar/fornecedores-editar.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { SelecaoPagamentoComponent } from './components/caixa/dialogs/selecao-pagamento/selecao-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    GerenciamentoComponent,
    FornecedoresComponent,
    FornecedoresCadastroComponent,
    CaixaComponent,
    PedidosComponent,
    FornecedoresEditarComponent,
    ConfirmationDialogComponent,
    SelecaoPagamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
