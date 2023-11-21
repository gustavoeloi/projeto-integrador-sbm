import { FornecedoresEditarComponent } from './components/fornecedores-editar/fornecedores-editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { FornecedoresCadastroComponent } from './components/fornecedores-cadastro/fornecedores-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/gerenciamento', pathMatch: 'full' },
  { path: 'gerenciamento', component: GerenciamentoComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'fornecedores/cadastrar', component: FornecedoresCadastroComponent },
  { path: 'fornecedores/editar/:id', component: FornecedoresEditarComponent },
  { path: 'caixa', component: CaixaComponent },
  { path: 'pedidos', component: PedidosComponent },
  // { path: '**', redirectTo: '/gerenciamento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
