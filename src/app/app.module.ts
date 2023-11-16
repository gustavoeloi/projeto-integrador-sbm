import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { FornecedoresCadastroComponent } from './components/fornecedores-cadastro/fornecedores-cadastro.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
