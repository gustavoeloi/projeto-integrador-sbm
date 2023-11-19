// product.model.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  quantityInStock: number;
  quantityInCart: number;
}

// product.mock.ts
export const productsMock: Product[] = [
  {
    id: 1,
    name: 'Cerveja Pilsen',
    price: 3.5,
    quantityInStock: 100,
    quantityInCart: 0,
  },
  {
    id: 2,
    name: 'Vodka Smirnoff',
    price: 25,
    quantityInStock: 50,
    quantityInCart: 0,
  },
  {
    id: 3,
    name: 'Refrigerante Coca-Cola',
    price: 2,
    quantityInStock: 80,
    quantityInCart: 0,
  },
  {
    id: 4,
    name: 'Cerveja IPA',
    price: 4,
    quantityInStock: 75,
    quantityInCart: 0,
  },
  {
    id: 5,
    name: 'Vodka Absolut',
    price: 30,
    quantityInStock: 40,
    quantityInCart: 0,
  },
  {
    id: 6,
    name: 'Refrigerante Pepsi',
    price: 1.5,
    quantityInStock: 90,
    quantityInCart: 0,
  },
  {
    id: 7,
    name: 'Cerveja Stout',
    price: 5,
    quantityInStock: 60,
    quantityInCart: 0,
  },
  {
    id: 8,
    name: 'Vodka Grey Goose',
    price: 35,
    quantityInStock: 45,
    quantityInCart: 0,
  },
  {
    id: 9,
    name: 'Refrigerante Fanta',
    price: 1.8,
    quantityInStock: 85,
    quantityInCart: 0,
  },
  {
    id: 10,
    name: 'Cerveja Weissbier',
    price: 4.2,
    quantityInStock: 70,
    quantityInCart: 0,
  },
  {
    id: 11,
    name: 'Vodka Belvedere',
    price: 40,
    quantityInStock: 30,
    quantityInCart: 0,
  },
  {
    id: 12,
    name: 'Refrigerante Sprite',
    price: 1.7,
    quantityInStock: 95,
    quantityInCart: 0,
  },
  {
    id: 13,
    name: 'Cerveja Lager',
    price: 3.8,
    quantityInStock: 65,
    quantityInCart: 0,
  },
  {
    id: 14,
    name: 'Vodka Absolut Elyx',
    price: 50,
    quantityInStock: 25,
    quantityInCart: 0,
  },
  {
    id: 15,
    name: 'Refrigerante Guaraná',
    price: 2,
    quantityInStock: 75,
    quantityInCart: 0,
  },
  {
    id: 16,
    name: 'Cerveja Ale',
    price: 4.5,
    quantityInStock: 55,
    quantityInCart: 0,
  },
  {
    id: 17,
    name: 'Vodka Cîroc',
    price: 55,
    quantityInStock: 20,
    quantityInCart: 0,
  },
  {
    id: 18,
    name: 'Refrigerante Sukita',
    price: 1.5,
    quantityInStock: 80,
    quantityInCart: 0,
  },
  {
    id: 19,
    name: 'Cerveja Bock',
    price: 5,
    quantityInStock: 45,
    quantityInCart: 0,
  },
  {
    id: 20,
    name: 'Vodka Ketel One',
    price: 60,
    quantityInStock: 15,
    quantityInCart: 0,
  },
];
