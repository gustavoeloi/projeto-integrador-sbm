import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  situacao: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    situacao: 'Ativa',
    estado: 'Brasília',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    situacao: 'Inativa',
    estado: 'Rio de Janeiro',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    situacao: 'Ativa',
    estado: 'São Paulo',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    situacao: 'Ativa',
    estado: 'Brasília',
  },
];

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss'],
})
export class FornecedoresComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'situacao',
    'estado',
  ];
  dataSource = ELEMENT_DATA;
}
