import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  { path: '', redirectTo: '/gerenciamento', pathMatch: 'full' },
  { path: 'gerenciamento', component: GerenciamentoComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'caixa', component: CaixaComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: '**', redirectTo: '/gerenciamento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
