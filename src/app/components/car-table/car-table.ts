import { Component } from '@angular/core';
import { CarModel } from '../../models/CarModel';

@Component({
  selector: 'app-car-table',
  standalone: false,
  templateUrl: './car-table.html',
  styleUrl: './car-table.css',
})
export class CarTable {
  car: CarModel = {} as CarModel;
  cars: CarModel[] = []

  countId: number = 1;

  save(car: CarModel) {
    car.id = this.countId;
    this.countId++;
    this.cars.push(car);
  }
}
