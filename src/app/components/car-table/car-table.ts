import { Component } from '@angular/core';

@Component({
  selector: 'app-car-table',
  standalone: false,
  templateUrl: './car-table.html',
  styleUrl: './car-table.css',
})
export class CarTable {
  cars = [
    {
      id: 1,
      name: 'Mustang',
      maker: 'Autozone',
      price: 40500.25,
      year: 2005
    },
    {
      id: 2,
      name: 'Fusca',
      maker: 'Ferrari',
      price: 20500.25,
      year: 2020
    },
    {
      id: 3,
      name: 'Coisa',
      maker: 'coisa',
      price: 0,
      year: 0
    },
  ]
}
